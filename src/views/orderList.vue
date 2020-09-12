<template>
    <div>
        <cloud-component></cloud-component>
        <head-component></head-component>
        <div class="orderList">
            <div v-if="tableData.length>0">
                <el-table :data="tableData" :cell-style="{padding:'0px'}" :row-style="{height:'40px'}" style="width:100%" class="bigTable" :header-cell-style="{background:'#ba86ea',color:'#fff'}">
                    <el-table-column align="center" prop="orderId" label="OrderNumber" width="180" />
                    <el-table-column align="center" prop="payTime" label="Date" />
                    <el-table-column align="center" prop="shopName" label="Product" />
                    <el-table-column align="center" prop="shopType" label="Plan" />
                    <el-table-column align="center" prop="price" label="Cost" />>
                </el-table>
                <el-row class="page">
                    <el-pagination background="" 
                    layout="prev, pager, next" 
                    :total="totalOrder" 
                    :page-size="pageSize" 
                    @current-change="handleCurrentChange" />
                </el-row>
            </div>
            <div class="no-data" v-else>
                <img src="@/assets/image/rainNo.png" alt="">
                <p>No data~</p>
            </div>
        </div>
    </div>
</template>


<script>
import cloudComponent from '@/components/cloudComponent'
import headComponent from '@/components/headComponent'
import Utils from "@/utils/util"
import store from '@/store/index'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "orderList",
    components: {
        cloudComponent,
        headComponent
    },
    data() {
        return {
            tableData: [],
            totalOrder: 0,
            pageSize: 10,
            PageIndex: 1
        }
    },
    computed: {
    },
    methods: {
        // 状态格式化
        statusFormatter(row, column, cellValue) {
            if (cellValue == '' || cellValue == null) {
                return '--'
            } else {
                return Utils.timeFormate(cellValue)
            }

        },
        //改变页面
        handleCurrentChange(val) {
            // 改变页的时候调用一次
            this.PageIndex = val;
            this.queryData()
        },
        queryData() {
            var _this = this;
            _this.$ajax.get(this.URLS.Load, {
                    params: {
                        page: _this.PageIndex,
                        limit: _this.pageSize,
                        key: '',
                        skip: '',
                        take: ''
                    }
                })
                .then(function(response) {
                    console.log(response.data)
                    if (response.data.code == '200') {
                        _this.tableData = response.data.data;
                    }
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        queryAllData() {
            var _this = this;
            _this.$ajax.get(this.URLS.LoadAll, {
                })
                .then(function(response) {
                    console.log(response.data)
                    if (response.data.code == '200') {
                        _this.totalOrder = response.data.data.length;
                    }
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
    },
    created() {
        this.queryData();
        this.queryAllData();
        console.log(store.getters)
    },
};
</script>

<style lang="scss" scoped>
.orderList {
    width: 1000px;
    margin: 0 auto;
    .page {
        margin-top: 20px;
    }
    .no-data {
        text-align: center;
        position: relative;
        img {
            width: 700px;
        }
        p {
            position: absolute;
            top: 380px;
            left: 0;
            right: 0;
            margin: auto;
            font-size: 18px;
            color: #d1d1d1;
        }
    }
}

/* 重置表格样式 */

.el-table th,
.el-table tr {
    border: 0 !important;
}

.el-table--border tr,
td {
    border: none !important;
}

.el-table::before {
    height: 0;
}

.bigTable {
    min-height: 330px;
    background-color: #fff;
    border-radius: 20px;
}

.el-table tr {
    background-color: #290811;
    color: #fff;
    font-size: 13px;
}

.el-pagination {
    text-align: center;
    cursor: pointer;
}

</style>