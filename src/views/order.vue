<template>
    <div>
        <cloud-component></cloud-component>
        <head-component></head-component>
        <div class="orderWrap">
            <div class="leftInfo">
                <div class="commonTab typeWrap" :class="{'cirlcle':flag0}">
                    <input class="title" v-model="select0" readonly placeholder="TYPE" @click="clickType0()">
                    <div v-if="flag0">
                        <div class="type" v-for="(item,index) in selectList[0].list" :key="item">
                            <p class="typeLi">
                                <span :class="{'active0': currenIndex0==index}" @click="getEachItem0(item,index)">{{item}}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="commonTab webWrap" :class="{'cirlcle':flag1}">
                    <input class="title" v-model="select1" readonly placeholder="WEB" @click="clickType1()">
                    <div v-if="flag1">
                        <div class="type" v-for="(item,index) in selectList[1].list" :key="item">
                            <p class="typeLi">
                                <span :class="{'active1': currenIndex1==index}" @click="getEachItem1(item,index)">{{item}}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="commonTab regionWrap" :class="{'cirlcle':flag2}">
                    <input class="title" v-model="select2" readonly placeholder="REGION" @click="clickType2()">
                    <div v-if="flag2">
                        <div class="type" v-for="(item,index) in selectList[2].list" :key="item">
                            <p class="typeLi">
                                <span :class="{'active2': currenIndex2==index}" @click="getEachItem2(item,index)">{{item}}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="commonTab amountWrap" :class="{'cirlcle':flag3}">
                    <div class="title" @click="clickType3()">AMOUNT</div>
                    <div v-if="flag3">
                        <input class="number" type="number" v-model="amount">
                    </div>
                </div>
                <!-- <div class="noStatus content">
                                 <img class="noStatus" src="../assets/image/rainNo.png" alt="">
                         </div> -->
                <div class="hasStatus content">
                    <div class="hasInner">
                        {{data}}
                    </div>
                    <img class="copy clipboardBtn" :data-clipboard-text="data" @click="copy" src="../assets/image/copy.png" alt="">
                </div>
            </div>
            <div class="rightInfo">
                <div class="top">
                    <p class="name">Total</p>
                    <p class="detail">XXGB</p>
                    <p class="name">Used</p>
                    <p class="detail">XXGB</p>
                    <p class="name">Remain</p>
                    <p class="detail">XXGB</p>
                </div>
                <div class="generate greyNot" :class="{'purple':isShowGenerate}">
                    GENERATE
                </div>
                <div class="generate grey">
                    DELETE
                </div>
                <div class="times">
                    <p class="expire">EXPIRE IN</p>
                    <p class="days"><span class="hours">23</span>DAYS</p>
                    <p class="hours">24：00</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import cloudComponent from '@/components/cloudComponent'
import headComponent from '@/components/headComponent'
import Utils from "@/utils/util"
import Clipboard from 'clipboard'
export default {
    name: "order",
    components: {
        cloudComponent,
        headComponent
    },
    data() {
        return {
            selectList: [{
                list: ['2.0', '3.0'],
            }, {
                list: ['Footisite', 'Shopify'],
            }, {
                list: ['US', 'DE', 'AU', 'UK', 'FR'],
            }, {
                list: ['2.0', '3.0'],
            }],
            flag0: false,
            flag1: false,
            flag2: false,
            flag3: false,
            select0: '',
            select1: '',
            select2: '',
            currenIndex0: 0,
            currenIndex1: 0,
            currenIndex2: 0,
            amount: '',
            data: '11111'
        }
    },
    computed: {
        isShowGenerate() {
            if (this.select0 && this.select1 && this.select2 && this.amount) {
                return true
            }

        }
    },
    methods: {
        //复制
        copy() {
            let clipboard = new Clipboard('.clipboardBtn')
            clipboard.on('success', e => {
                _this.$message({
                    message: '复制成功'
                });
                // 释放内存
                clipboard.destroy()
            })
            clipboard.on('error', e => {
                // 不支持复制
                _this.$message({
                    message: '该浏览器不支持自动复制'
                });
                // 释放内存
                clipboard.destroy()
            })
        },
        clickType0() {
            this.flag0 = !this.flag0;
        },
        getEachItem0(item, index) {
            this.select0 = item;
            this.flag0 = false;
            this.currenIndex0 = index;
        },
        clickType1() {
            if (this.select0) {
                this.flag1 = !this.flag1
            }
        },
        getEachItem1(item, index) {
            this.select1 = item;
            this.flag1 = false;
            this.currenIndex1 = index;
        },
        clickType2() {
            if (this.select0 && this.select1) {
                this.flag2 = !this.flag2
            }
        },
        getEachItem2(item, index) {
            this.select2 = item;
            this.flag2 = false;
            this.currenIndex2 = index;
        },
        clickType3() {
            if (this.select0 && this.select1 && this.select2) {
                this.flag3 = !this.flag3
            }
        },
    },
    created() {},
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
                .active0 {
                    background: #cd375a;
                    display: inline-block;
                    padding: 0 10px;
                    border-radius: 10px
                }
                .active1 {
                    background: #d96b3a;
                    display: inline-block;
                    padding: 0 10px;
                    border-radius: 10px
                }
                .active2 {
                    background: #1aacd3;
                    display: inline-block;
                    padding: 0 10px;
                    border-radius: 10px
                }
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
    }
    .webWrap {
        left: 320px;
        padding: 10px 5px;
        background-color: #f89c69;
    }
    .regionWrap {
        left: 450px;
        padding: 10px 10px;
        background-color: #5cc9f0;
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
            }
        }
    }
}
</style>