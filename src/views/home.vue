<template>
    <div>
        <cloud-component></cloud-component>
        <div class="homeWrap">
            <head-component></head-component>
            <div class="main">
                <ul class="clearfix">
                    <li v-for="(item,index) in list" :key="index">
                        <div class="inner">
                            <div class="imgCenter">
                                <img :src="item.img" alt="">
                            </div>
                            <p class="brand">{{item.brand}}</p>
                            <div class="detail">
                                <p style="font-size:14px;color:#6a6a6a">Support sites:</p>
                                <div v-for="(iteminfo,idx) in item.detail" :key="idx">
                                    <p>{{iteminfo.name}}</p>
                                </div>
                            </div>
                            <div class="holder">
                                <input class="discount" v-model="item.discountKey" type="text" placeholder="Discount">
                                <span class="apply" @click="applyGet(item)">apply</span>
                            </div>
                            <div class="price">
                                {{item.finalPrice | formatPrice}}
                            </div>
                            <div class="operate" v-if="index==0">
                                <div @click="showDetail(index)">
                                    <img classs="size" src="../assets/image/plan.png" alt="">
                                </div>
                                <div @click="buy(item)">
                                    <img class="buy" src="../assets/image/buy.png" alt="">
                                </div>
                            </div>
                            <div class="operate" v-else>
                                <div>
                                    <img classs="size" src="../assets/image/planGrey.png" alt="">
                                </div>
                                <div>
                                    <img class="buy" src="../assets/image/buyGrey.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="info" v-if="item.showFlag">
                            <div class="likeUl" v-for="(info,ind) in item.sizeList" :key="ind">
                                <p :class="{'active': ind === item.activeLinkId}" @click="changeGB(index,ind)">{{info.name}}</p>
                            </div>
                            <div class="nav nav-border"></div>
                            <div class="nav nav-background"></div>
                        </div>
                    </li>
    
                    <li>
                        <div class="inner">
                            <div class="imgCenter">
                                <img src="../assets/image/icon4.png" alt="">
                            </div>
                            <p class="brand">Comming soon</p>
                            <div class="detail">
                                <p>surprise</p>
                            </div>
                            <div class="operateGrey">
                                <div>
                                    <img classs="size" src="../assets/image/planGrey.png" alt="">
                                </div>
                                <div>
                                    <img class="buy" src="../assets/image/buyGrey.png" alt="">
                                </div>
                            </div>
                        </div>
    
                    </li>
                </ul>
            </div>
        </div>
        <div class="mask" v-if="isPayShowFlag"></div>
        <div class="payTypeWrap" v-if="isPayShowFlag">
            <div class="close">
                <img @click="closePay" class="imgGoods" src="../assets/image/X.png" alt="" />
            </div>
            <div class="con">
                 <div>
                     <div class="common" @click="choosePayType(1)">
                         <div class="top">
                              <span class="quanGrey" :class="{'active':payIndex===1}"></span>
                              <img class="imgGoods" src="../assets/image/weChat.png" alt="" />
                         </div>
                         <div class="code" v-if="payjsQr&&payIndex===1">
                            <img :src="payjsQr" alt="" />
                         </div>
                     </div>
                      <div class="common" @click="choosePayType(2)">
                          <div class="top">
                            <span class="quanGrey" :class="{'active':payIndex===2}"></span>
                            <img class="imgGoods" src="../assets/image/stripe.png" alt="" />
                          </div>
                     </div>
                 </div>
                 
                 <div v-if="payIndex===2" class="next" @click="goStripe">
                     NEXT
                 </div>
            </div>

        </div>
    </div>
</template>


<script>
import headComponent from '@/components/headComponent'
import cloudComponent from '@/components/cloudComponent'
import Utils from "@/utils/util"
import { loadStripe } from '@stripe/stripe-js';

export default {
    name: "home",
    data() {
        return {
            list: [{
                img: require('../assets/image/icon1.png'),
                brand: 'RainBow Resi 2.0',
                title: '',
                detail: [
                    { name: 'Nike/Mesh/Shopify' },
                    { name: 'Supreme/Footsite US' },
                    { name: 'Finishline/JD/Yeezysupply' },
                    { name: 'Shoepalace/Foolocler EU/AU' },
                    { name: 'SAnd More' },
                    { name: '....' },
                ],
                sizeList: [
                    { name: '5GB-$60/¥414', id: 1 },
                    { name: '10GB-$115/¥794', id: 2 },
                    { name: '20GB-$223/¥1539', id: 3 },
                    { name: '30GB-$324/¥2235', id: 4 },
                    { name: '50GB-$528/¥3643', id: 5 },
                    { name: '80GB-$816/¥5630', id: 6 },
                    { name: '100GB-$1000/6900', id: 7 },
                ],
                activeLinkId: '',
                discountKey: '',
                showFlag: false
            }, {
                img: require('../assets/image/icon3.png'),
                brand: 'RainBow Resi 3.0',
                detail: [
                    { name: 'Nike/Mesh/Shopify' },
                    { name: 'Supreme/Footsite US' },
                    { name: 'Finishline/JD/Yeezysupply' },
                    { name: 'Shoepalace/Foolocler EU/AU' },
                    { name: 'SAnd More' },
                    { name: '....' },
                ],
                sizeList: [
                    { name: '5GB-$60', id: 1 },
                    { name: '10GB-$115', id: 2 },
                    { name: '15GB-$165', id: 3 },
                    { name: '20GB-$220', id: 4 },
                ],
                activeLinkId: '',
                discountKey: '',
                showFlag: false
            }, {
                img: require('../assets/image/icon2.png'),
                brand: 'RainBow ISP',
                detail: [
                    { name: 'Nike/Mesh/Shopify' },
                    { name: 'Supreme/Footsite US' },
                    { name: 'Finishline/JD/Yeezysupply' },
                    { name: 'Shoepalace/Foolocler EU/AU' },
                    { name: 'SAnd More' },
                    { name: '....' },
                ],
                sizeList: [
                    { name: '5GB-$60', id: 1 },
                    { name: '10GB-$115', id: 2 },
                    { name: '15GB-$165', id: 3 },
                    { name: '20GB-$220', id: 4 },
                ],
                activeLinkId: '',
                discountKey: '',
                showFlag: false
            }],
            successUrl: '',
            cancelUrl: '',
            checkoutSessionid: '',
            isPayShowFlag:false,//弹窗
            payIndex:0,//选中支付方式
            payjsQr:''//二维码图片
        }
    },
    components: {
        headComponent,
        cloudComponent
    },
    filters: {
        formatPrice(price) {
            return price ? `Trade Price: ￥${price}` : ''
        }
    },
    methods: {
        //选择支付方式
        choosePayType(index){
            this.payIndex = index
        },
        //关闭弹窗
        closePay(){
            this.isPayShowFlag = false
        },
        //stripe支付
        goStripe(){
           this.stripeFunc();
        },
        buy(item) {
            var _this = this;
            _this.isPayShowFlag = true
            if (item.discountKey) {
                // _this.stripeFunc();
            } else {
                _this.$ajax.get(this.URLS.apply, {
                        params: {
                            shopType: item.activeLinkId + 1,
                            discountKey: ''
                        }
                    })
                    .then(function(response) {
                        console.log(response)
                        if (response.data.code == '200') {
                            _this.checkoutSessionid = response.data.result.checkoutSessionid
                            _this.payjsQr = response.data.result.payjsQr
                            // _this.stripeFunc();
                        } else {
                            _this.$message({
                                message: response.data.message
                            });
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    })
            }
        },
        async stripeFunc() {
            var _this = this;
            const stripe = await loadStripe('pk_live_51HMu4CK7JUCEXS5aHhHm4lFmN7Y9N4RKyJJKfiGufSjF23zm8zm2s0KCTPcctJITFmziqntXRj3BjZzKaaOVxzBN00gxVPlrkh');
            stripe.redirectToCheckout({ sessionId: _this.checkoutSessionid })
                .then(function(result) {
                    // If `redirectToCheckout` fails due to a browser or network
                    // error, you should display the localized error message to your
                    // customer using `error.message`.
                    if (result.error) {
                        console.warn(result.error.message);
                    }
                })
                .catch(function(error) {
                    console.error('Error:', error);
                });
        },
        changeGB(index, idx) {
            this.list[index].activeLinkId = idx;
        },
        showDetail(index) {
            this.list[index].showFlag = !this.list[index].showFlag
        },
        applyGet(item) {
            var _this = this;
            if (item.activeLinkId === '') {
                _this.$message({
                    message: 'choose plan'
                });
                return
            }
            if (item.discountKey === '') {
                _this.$message({
                    message: 'please write discountKey'
                });
                return
            }

            _this.$ajax.get(this.URLS.apply, {
                    params: {
                        shopType: item.activeLinkId + 1,
                        discountKey: item.discountKey
                    }
                })
                .then(function(response) {
                    if (response.data.code == '200') {
                        _this.checkoutSessionid = response.data.result.checkoutSessionid
                        _this.price = response.data.result.price
                        _this.payjsQr = response.data.result.payjsQr
                        _this.$set(item, 'finalPrice', _this.price)

                    } else {
                        item.discountKey = ''
                        _this.$message({
                            message: response.data.message
                        });
                    }
                })
                .catch(function(error) {
                    item.discountKey = ''
                    console.log(error);
                })

        }

    },
    computed: {

    },
    created() {

    }
};
</script>

<style lang="scss" scoped>
.homeWrap {
    ::-webkit-input-placeholder { /* WebKit browsers */
     color: #d1d1d1;
    }

    ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #d1d1d1;
    }

    :-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #d1d1d1;
    }
    .main {
        width: 1200px;
        margin: 0 auto;
        ul {
            display: flex;
            justify-content: space-between;
            li {
                background-color: #f5fbfe;
                border-radius: 20px;
                padding: 20px 15px 20px 15px;
                box-shadow: 2px 1px 4px #aaa;
                width: 250px;
                position: relative;
                .inner {
                    // background: linear-gradient(#fefdeb, #fcfdef);
                }
                .imgCenter {
                    text-align: center; // background-color: #fff;
                    img {
                        width: 230px; // height: 108px;
                    }
                }
                .brand {
                    padding: 10px 0;
                    margin: 0 20px;
                    font-weight: bold;
                    color: #6a6a6a;
                    font-size: 20px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                }
                .detail {
                    height: 130px;
                    p {
                        color: #babbb4;
                        padding: 0 20px;
                        font-size: 12px;
                        line-height: 18px;
                    }
                }
                .holder {
                    margin-top: 30px;
                    margin-left: 17px;
                    .discount {
                        border: 1px solid #8c8c8b;
                        border-radius: 10px;
                        padding: 0 10px;
                        width: 80px;
                    }
                    .apply {
                        color: #6a6a6a;
                        cursor: pointer;
                        font-weight: bold;
                    }
                }
                .price {
                    margin-top: 5px;
                    color: #6a6a6a;
                    font-size: 14px;
                }
                .subInfo {
                    margin: 10px 0;
                    p {
                        padding: 0 20px;
                        color: #ba86ea;
                    }
                }
                .operate {
                    position: absolute;
                    right: 25px;
                    bottom: 20px;
                    cursor: pointer;
                    img{
                        width: 70px;
                    }
                }
                .operateGrey {
                    display: flex;
                    justify-content: space-between;
                    align-content: center;
                    margin-top: 27px;
                    cursor: pointer;
                     img{
                        width: 70px;
                    }
                }
                .info {
                    position: absolute;
                    right: -7px;
                    top: 73px;
                    width: 100px;
                    width: 140px;
                    padding: 10px 0;
                    line-height: 25px;
                    background: #fff;
                    -webkit-box-shadow: 1px 2px 3px #E9D985;
                    box-shadow: 1px 2px 3px #d1d1d1;
                    border-radius: 4px;
                    text-align: center;
                    color: #929292;
                }
                .nav {
                    position: absolute;
                    left: 30px;
                    overflow: hidden;
                    width: 0;
                    height: 0;
                    border-width: 10px;
                    border-style: solid dashed dashed dashed;
                }
                .nav-border {
                    bottom: -20px;
                    border-color: #d1d1d1 transparent transparent transparent;
                }
                .nav-background {
                    bottom: -19px;
                    border-color: #fff transparent transparent transparent;
                }
                .likeUl {
                    padding: 3px 10px;
                    cursor: pointer;
                    p {
                        &.active {
                            background-color: #ba86ea;
                            border-radius: 10px;
                            color: #fff;
                        } // &:hover {
                        //     background-color: #ba86ea;
                        //     border-radius: 10px;
                        //     color: #fff;
                        // }
                    }
                }
            }
        }
    }
}
.mask{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: 0 auto;
        background-color: #fff;
        opacity: 0.6;
}
.payTypeWrap{
        background-color: #5d6359;
        padding: 10px 40px 30px 50px;
        border-radius: 20px;
        width: 210px;
        position: absolute;
        left: 50%; 
        top: 50%;
        transform: translate(-50%, -50%); 

        .close{
            overflow: hidden;
           img{
               float: right;
               cursor: pointer;
               margin-top: 10px;
               width: 20px;
           }
        }
        .con{
            .common{
                margin-top: 15px;
                .top{
                    overflow: hidden;
                    img{
                        cursor: pointer;
                        height: 50px;
                    }
                    .quanGrey{
                        float: left;
                        width:10px;
                        height: 10px;
                        border: 1px solid #fff;
                        border-radius: 5px;
                        margin-right: 10px;
                        margin-top: 10px;
                        &.active{
                            background-color: #fff;
                        }
                    }
                }
            }
            .code{
                    width: 200px;
                    height: 200px;
                    margin: 0 auto;
                    overflow: hidden;
                    img{
                        text-align: center;
                        max-width: 100%;
                    }
            }
            .next{
               height: 50px;
               border-radius: 30px;
               line-height: 50px;
               width: 146px;
               text-align: center;
               margin: 0 auto;
               color: #fff;
               background: linear-gradient(to right, #c08dec ,#ebaafe);
               cursor: pointer;
               font-size: 26px;
               font-weight: bold;
            }
        }
}
</style>