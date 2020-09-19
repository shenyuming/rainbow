<template>
    <div>
        <cloud-component></cloud-component>
        <head-component></head-component>
        <div class="orderWrap">
            <div class="leftInfo">
                <div class="commonTab" :class="[item.classname,{'cirlcle':item.isClick}]" v-for="(item, index) in tab" :key="item.name">
                    <div class="title" @click="clickType(item, index)">{{ item.selectStr || item.name }}</div>
                    <div v-show="item.isClick">
                        <div v-show="item.classname==='typeWrap'">
                            <div class="type" v-for="(item1,index1) in list1" :key="index1">
                            <p class="typeLi">
                                <span @click="getEachItem(item,index,index1,item1)">{{ item1.name }}</span>
                            </p>
                            </div>
                        </div>
                         <div v-show="item.classname==='webWrap'">
                            <div class="type" v-for="(item2,index2) in list2" :key="index2">
                            <p class="typeLi">
                                <span @click="getEachItem(item,index,index2,item2)">{{ item2.name }}</span>
                            </p>
                            </div>
                        </div>
                         <div v-show="item.classname==='regionWrap'">
                            <div class="type" v-for="(item3,index3) in list3" :key="index3">
                            <p class="typeLi">
                                <span @click="getEachItem(item,index,index3,item3)">{{ item3.name }}</span>
                            </p>
                            </div>
                        </div>
                         <div v-show="item.classname==='amountWrap'">
                             <input class="number" type="number" v-model="item.selectStr">
                        </div>
                    </div>
                </div>
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
                    <p class="detail">{{leftBrandWidth}}GB</p>
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
            tab: [
                {
                    name: 'TYPE',
                    classname: 'typeWrap',
                    isClick: false,
                    selectStr: '',
                    selectIndex:''
                },
                {
                    name: 'WEB',
                    classname: 'webWrap',
                    isClick: false,
                    selectStr: '',
                    selectIndex:''
                },
                {
                    name: 'REGION',
                    classname: 'regionWrap',
                    isClick: false,
                    selectStr: '',
                    selectIndex:''
                },
                {
                    name: 'AMOUNT',
                    classname: 'amountWrap',
                    isClick: false,
                    selectStr: '',
                    selectIndex:''
                },
            ],
            list1: [],
            list2: [],
            list3: [],
            mainData: [
                {
                    name: '2.0',
                    list: [
                        {
                            name: 'Footlocker ASIA',
                            list: [
                                {
                                    name: 'hk'
                                },
                                {
                                    name: 'au'
                                },
                                {
                                    name: 'sg'
                                },
                            ]
                        },
                        {
                            name: 'Footlocker EU',
                            list: [
                                {
                                    name: 'uk'
                                },
                                {
                                    name: 'de'
                                },
                                {
                                    name: 'fr'
                                },
                                {
                                    name: 'nl'
                                },
                                {
                                    name: 'it'
                                },
                                {
                                    name: 'cz'
                                },
                                {
                                    name: 'lu'
                                },
                                {
                                    name: 'be'
                                },
                                {
                                    name: 'es'
                                },
                                {
                                    name: 'dk'
                                },
                                {
                                    name: 'se'
                                },
                                {
                                    name: 'at'
                                },
                                {
                                    name: 'gr'
                                },
                                {
                                    name: 'hu'
                                },
                                {
                                    name: 'ie'
                                },
                                {
                                    name: 'pl'
                                },
                                {
                                    name: 'pt'
                                }
                            ]
                        },
                        {
                            name: 'Mesh',
                            list: [
                                {
                                    name: 'uk'
                                },
                                {
                                    name: 'de'
                                }
                            ]
                        },
                         {
                            name: 'Offspring',
                            list: [
                                {
                                    name: 'uk'
                                },
                                {
                                    name: 'de'
                                }
                            ]
                        },
                         {
                            name: 'Supreme',
                            list: [
                                {
                                    name: 'uk'
                                },
                                {
                                    name: 'de'
                                },{
                                    name: 'us'
                                },
                                {
                                    name: 'ca'
                                },{
                                    name: 'jp'
                                }
                            ]
                        },
                         {
                            name: 'Shopify',
                            list: [
                                {
                                    name: 'us'
                                }
                            ]
                        },
                         {
                            name: 'Yeezysupply',
                            list: [
                                {
                                    name: 'us'
                                }
                            ]
                        },
                         {
                            name: 'Mesh',
                            list: [
                                {
                                    name: 'uk'
                                },
                                {
                                    name: 'de'
                                }
                            ]
                        },
                         {
                            name: 'Footsite',
                            list: [
                                {
                                    name: 'us'
                                },
                                {
                                    name: 'ca'
                                }
                            ]
                        }, 
                        {
                            name: 'Shoepalace',
                            list: [
                                {
                                    name: 'us'
                                }
                            ]
                        },
                         {
                            name: 'Finishline',
                            list: [
                                {
                                    name: 'us'
                                }
                            ]
                        },
                         {
                            name: 'Hibbet',
                            list: [
                                {
                                    name: 'us'
                                }
                            ]
                        },
                         {
                            name: 'Footsite',
                            list: [
                                {
                                    name: 'us'
                                },
                                {
                                    name: 'ca'
                                }
                            ]
                        },
                         {
                            name: 'JD sports',
                            list: [
                                {
                                    name: 'us'
                                }
                            ]
                        },
                         {
                            name: 'NIKE/SNKRS',
                            list: [
                                {
                                    name: 'uk'
                                },
                                {
                                    name: 'us'
                                },{
                                    name: 'ca'
                                },
                                {
                                    name: 'hk'
                                },{
                                    name: 'au'
                                },
                                {
                                    name: 'sg'
                                },{
                                    name: 'de'
                                },
                                {
                                    name: 'fr'
                                },{
                                    name: 'nl'
                                },
                                {
                                    name: 'it'
                                },{
                                    name: 'cz'
                                },
                                {
                                    name: 'lu'
                                },{
                                    name: 'be'
                                },
                                {
                                    name: 'es'
                                },{
                                    name: 'dk'
                                },
                                {
                                    name: 'se'
                                },{
                                    name: 'at'
                                },
                                {
                                    name: 'gr'
                                },{
                                    name: 'hu'
                                },
                                {
                                    name: 'ie'
                                },{
                                    name: 'pl'
                                },
                                {
                                    name: 'pt'
                                }
                            ]
                        },
                         {
                            name: 'Adidas',
                            list: [
                               {
                                    name: 'uk'
                                },
                                {
                                    name: 'us'
                                },{
                                    name: 'ca'
                                },
                                {
                                    name: 'hk'
                                },
                                {
                                    name: 'jp'
                                },
                                {
                                    name: 'au'
                                },
                                {
                                    name: 'sg'
                                },{
                                    name: 'de'
                                },
                                {
                                    name: 'fr'
                                },{
                                    name: 'nl'
                                },
                                {
                                    name: 'it'
                                },{
                                    name: 'cz'
                                },
                                {
                                    name: 'lu'
                                },{
                                    name: 'be'
                                },
                                {
                                    name: 'es'
                                },{
                                    name: 'dk'
                                },
                                {
                                    name: 'se'
                                },{
                                    name: 'at'
                                },
                                {
                                    name: 'gr'
                                },{
                                    name: 'hu'
                                },
                                {
                                    name: 'ie'
                                },{
                                    name: 'pl'
                                },
                                {
                                    name: 'pt'
                                }
                            ]
                        },
                         {
                            name: 'Converse',
                            list: [
                                {
                                    name: 'uk'
                                },
                                {
                                    name: 'us'
                                }
                            ]
                        }
                    ],
                },{ 
                    name: '3.0',
                    list: [],
                    selectStr: ''
                }
            ],
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
            leftBrandWidth: '',
            bwExpireDate: '' //过期时间
        }
    },
    computed: {
        isShowGenerate() {
            if (this.tab[0].selectStr && this.tab[1].selectStr && this.tab[2].selectStr && this.tab[3].selectStr) {
                return true
            }
        }
    },
    methods: {
        //点击切换
        clickType(item, index) {
            if(index>0){
                if(this.tab[index-1].selectStr){
                    item.isClick = !item.isClick
                }else{
                item.isClick = false
                }
            }else{
                item.isClick = !item.isClick;
            }          
        },
        //选择item
        getEachItem(item,index,index1,item1) {
            item.selectIndex = index1
            if(index==0){
               this.list2 = this.mainData[index].list              
            }
            if(index==1){
                this.tab[index+1].selectStr =''
                this.list3 = this.list2[index1].list
            }
            item.selectStr= item1.name
            console.log(item.selectStr)
            item.isClick = !item.isClick
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
                        _this.usedBandWidth = Number(response.data.result.usedBandWidth)
                        _this.bwExpireDate = response.data.result.bwExpireDate
                        _this.leftBrandWidth = Number(response.data.result.totalBandWidth - response.data.result.usedBandWidth)
                        _this.leftBrandWidth = _this.leftBrandWidth / 1000000000
                        _this.totalBandWidth = Math.ceil(_this.totalBandWidth / 1000000000)
                        _this.usedBandWidth = _this.usedBandWidth / 1000000000

                    }
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        //生成代理页面
        generateForm() {
            var _this = this;
            _this.$ajax.get(this.URLS.GenerateProxy, {
                    params: {
                        key: store.getters.oidcUser.Key,
                        country: _this.tab[2].selectStr,
                        num: _this.tab[3].selectStr,
                        webName: _this.tab[1].selectStr,
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
        this.list1 = this.mainData.map(item => {
            return item
        })
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
         max-height: 200px;
        overflow-y: scroll;
        .active {
            background: #cd375a;
            display: inline-block;
            padding: 0 10px;
            border-radius: 10px
        }
    }
    .webWrap {
        left: 309px;
        padding: 10px 10px;
        background-color: #f89c69;
         max-height: 200px;
        overflow-y: scroll;
        .active {
            background: #d96b3a;
            display: inline-block;
            padding: 0 10px;
            border-radius: 10px
        }
    }
    .regionWrap {
        left: 460px;
        padding: 10px 5px;
        background-color: #5cc9f0;
         max-height: 200px;
        overflow-y: scroll;
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
            padding: 40px 20px;
            color: #6d6d6e;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 10px;
            text-align: center;
            width: 90px;
            .name {
                font-size: 16px;
                font-weight: bold;
            }
            .detail {
                font-size: 14px;
                margin-bottom: 15px;
                word-break: break-all;
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
                width: 120px;
                text-align: center;
            }
        }
    }
}
</style>