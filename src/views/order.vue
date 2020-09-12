<template>
    <div>
        <cloud-component></cloud-component>
        <head-component></head-component>
        <div class="orderWrap">
            <div class="leftInfo">
                <div class="commonTab" :class="[item.classname,{'cirlcle':item.isClick}]" v-for="(item,index) in selectList" :key="index">
                    <div class="title" @click="clickType(item,index)">{{item.selectStr || item.name}}</div>
                    <div v-show="item.isClick">      
                            <template v-if="index<3">
                                 <div class="type" v-for="(itemlist,indexList) in item.list" :key="indexList">
                                  <p class="typeLi">
                                        <span :class="{ 'active':item.currenIndex==indexList }" @click="getEachItem(item,itemlist,indexList)">{{itemlist}}</span>
                                </p>
                                 </div>
                            </template>
                            <template v-else>          
                                <input class="number" type="number" v-model="item.selectStr">
                            </template>                      
                    </div>
                </div>
    
    
    
               <!-- <div class="noStatus content">
                     <img class="noStatus" src="../assets/image/rainNo.png" alt="">
                </div> -->
                <div class="hasStatus content">
                    <div class="hasInner" id="hasInner">
                        {{content}}
                    </div>
                    <img class="copy clipboardBtn" :data-clipboard-text="content" @click="copy" src="../assets/image/copy.png" alt="">
                </div>
            </div>
            <div class="rightInfo">
                <div class="top">
                    <p class="name">Total</p>
                    <p class="detail">{{totalBandWidth}}GB</p>
                    <p class="name">Used</p>
                    <p class="detail">{{usedBandWidth}}GB</p>
                    <p class="name">Remain</p>
                    <p class="detail">{{totalBandWidth-usedBandWidth}}GB</p>
                </div>
                <div class="generate greyNot" :class="{'purple':isShowGenerate}" @click="generateForm">
                    GENERATE
                </div>
                <div class="generate grey" @click="deleteInfo()">
                    DELETE
                </div>
                <div class="times">
                    <p class="expire">EXPIRE IN</p>
                    <p class="hours">{{bwExpireDate}}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import cloudComponent from '@/components/cloudComponent'
import headComponent from '@/components/headComponent'
import Utils from "@/utils/util"
import store from '@/store/index'
import Clipboard from 'clipboard'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "order",
    components: {
        cloudComponent,
        headComponent
    },
    data() {
        return {
            selectList: [{
                    name: 'TYPE',
                    list: ['2.0', '3.0'],
                    isClick: false,
                    classname: 'typeWrap',
                    selectStr: '',
                    currenIndex: ''
                },
                {
                    name: 'WEB',
                    list: ['Footisite', 'Shopify'],
                    isClick: false,
                    classname: 'webWrap',
                    selectStr: '',
                    currenIndex: ''
                },
                {
                    name: 'Region',
                    list: ['us', 'de', 'au', 'uk', 'fr'],
                    isClick: false,
                    classname: 'regionWrap',
                    selectStr: '',
                    currenIndex: ''
                },
                {
                    name: 'AMOUNT',
                    list: [],
                    isClick: false,
                    classname: 'amountWrap',
                    selectStr: '',
                    currenIndex: ''
                }
            ],
            content: '',
            totalBandWidth: '',
            usedBandWidth: '',
            bwExpireDate:''//过期时间
        }
    },
    computed: {
        isShowGenerate() {
            if (this.selectList[0].selectStr && this.selectList[1].selectStr && this.selectList[2].selectStr && this.selectList[3].selectStr) {
                return true
            }
        },
    },
    methods: {
        //点击切换
        clickType(item, index) {
            if (index > 0) {
                if (this.selectList[index - 1].selectStr) {
                    item.isClick = !item.isClick;
                } else {
                    item.isClick = false
                }
            } else {
                item.isClick = !item.isClick;
            }

        },
        //选择item
        getEachItem(item, itemlist, index) {
            item.selectStr = itemlist;
            item.isClick = false;
            item.currenIndex = index
        },
        //查询流量
        queryBrand() {
            var _this = this;
            _this.$ajax.get(this.URLS.GetBandwidth, {
                    params: {
                        key: store.getters.oidcUser.Key
                    }
                })
                .then(function(response) {
                    if (response.data.code == '200') {
                        _this.totalBandWidth = Number(response.data.result.totalBandWidth);
                        _this.usedBandWidth = Number(response.data.result.usedBandWidth);
                        _this.bwExpireDate = response.data.result.bwExpireDate
                    }
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        //生成代理页面
        generateForm() {
            var _this = this;
            var countryNum;
            if (_this.selectList[1].selectStr == 'Footisite') {
                countryNum = 2;
            } else {
                countryNum = 1;
            }
            _this.$ajax.get(this.URLS.GenerateProxy, {
                    params: {
                        key: store.getters.oidcUser.Key,
                        country: _this.selectList[2].selectStr,
                        num: _this.selectList[3].selectStr,
                        poolNum: countryNum
                    }
                })
                .then(function(response) {
                    console.log(response)
                    if (response.data.code == '200') {
                        _this.content = response.data.result;
                        _this.content = _this.content.replace(/↵/g, "\n");
                    } else {
                        _this.$message({
                            message: response.data.message
                        });
                    }
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        //删除
        deleteInfo() {
            this.content = '';
            this.$message({
                message: '清空数据成功~'
            });
        },
        //复制
        copy() {
            let clipboard = new Clipboard('.clipboardBtn')
            clipboard.on('success', e => {
                this.$message({
                    message: '复制成功'
                });
                // 释放内存
                clipboard.destroy()
            })
            clipboard.on('error', e => {
                // 不支持复制
                this.$message({
                    message: '该浏览器不支持自动复制'
                });
                // 释放内存
                clipboard.destroy()
            })
        }

    },
    created() {
        this.queryBrand();
        console.log(store.getters)
    },
};
</script>

<style lang="scss" scoped>
.orderWrap {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    input {
        background: none;
        outline: none;
        border: none;
    }
    ::-webkit-input-placeholder {
        /*Webkit browsers 谷歌*/
        color: #fff;
    }
    /* 普通IE浏览器 样式清除 */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
    }
    /* 火狐浏览器样式清除 */
    input[type="number"] {
        -moz-appearance: textfield;
    }
    .cirlcle {
        border-radius: 15px !important;
    }
    .commonTab {
        position: absolute;
        top: -30px;
        color: #fff;
        text-align: center;
        line-height: 25px;
        border-radius: 15px 15px 0 0;
        cursor: pointer;
        .title {
            color: #fff;
            text-align: center;
            width: 100px;
            cursor: pointer;
        }
        .type {
            .typeLi {
                margin: 5px 0;
                cursor: pointer;
            }
        }
        .number {
            margin: 10px 0;
            width: 80px;
            padding: 0 10px;
            color: #fff;
            background: #696daa;
            width: 85px;
            height: 25px;
            line-height: 25px;
            border-radius: 12px;
            text-align: left;
        }
    }
    .typeWrap {
        left: 70px;
        padding: 10px 0px;
        background-color: #ff496f;
        .active {
            background: #cd375a;
            display: inline-block;
            padding: 0 10px;
            border-radius: 10px
        }
    }
    .webWrap {
        left: 320px;
        padding: 10px 5px;
        background-color: #f89c69;
        .active {
            background: #d96b3a;
            display: inline-block;
            padding: 0 10px;
            border-radius: 10px
        }
    }
    .regionWrap {
        left: 450px;
        padding: 10px 10px;
        background-color: #5cc9f0;
        .active {
            background: #1aacd3;
            display: inline-block;
            padding: 0 10px;
            border-radius: 10px
        }
    }
    .amountWrap {
        left: 600px;
        padding: 10px 10px;
        background-color: #9c9fcc;
    }
    .leftInfo {
        float: left;
        .content {
            width: 800px;
        }
        .noStatus {
            width: 800px;
            height: 550px;
        }
        .hasStatus {
            width: 760px;
            height: 500px;
            border-radius: 30px;
            padding: 30px;
            box-sizing: border-box;
            background-color: #fff;
            .hasInner {
                height: 400px;
                border-radius: 10px;
                background-color: #f1f0ee;
                color: #1f1f1f;
                padding: 30px;
                box-sizing: border-box;
                overflow: auto;
                word-break: break-all;
                line-height: 20px;
                white-space: pre-line;
            }
            .copy {
                float: right;
                margin-top: 10px;
                cursor: pointer;
                width: 78px;
            }
        }
    }
    .rightInfo {
        float: right;
        margin-right: 80px;
        margin-top: 20px;
        .top {
            padding: 40px 30px;
            color: #6d6d6e;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 10px;
            text-align: center;
            .name {
                font-size: 16px;
                font-weight: bold;
            }
            .detail {
                font-size: 14px;
                margin-bottom: 15px;
            }
        }
        .generate {
            height: 40px;
            line-height: 40px;
            border-radius: 20px;
            margin: 20px 0px;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            padding: 0 10px;
            color: #fff;
            cursor: pointer;
        }
        .purple {
            background: linear-gradient(to right, #ba86e8, #cba5cc) !important;
            cursor: pointer !important;
        }
        .grey {
            background: linear-gradient(to right, #a4a4a2, #cbcbcb);
        }
        .greyNot {
            cursor: not-allowed;
            background: -webkit-linear-gradient(to right, #a4a4a2, #cbcbcb);
            background: -o-linear-gradient(to right, #a4a4a2, #cbcbcb);
            background: -moz-linear-gradient(to right, #a4a4a2, #cbcbcb);
            background: linear-gradient(to right, #a4a4a2, #cbcbcb);
        }
        .times {
            text-align: center;
            color: #1f1f1f;
            .expire {
                margin-top: 20px;
                line-height: 20px;
            }
            .hours {
                    color: #5bc9ef;
                    font-size: 16px;
                    font-weight: bold;
                    width: 100px;
                    text-align: center;
            }
        }
    }
}
</style>