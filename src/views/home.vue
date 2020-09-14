<template>
    <div>
        <cloud-component></cloud-component>
        <div class="homeWrap">
            <head-component></head-component>
            <div class="main">
                <ul>
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
                    { name: '5GB-$60', id: 1 },
                    { name: '10GB-$115', id: 2 },
                    { name: '15GB-$165', id: 3 },
                    { name: '20GB-$220', id: 4 },
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
            checkoutSessionid: ''
        }
    },
    components: {
        headComponent,
        cloudComponent
    },
    filters: {
        formatPrice(price) {
            return price ? `Trade Price: $${price}` : ''
        }
    },
    methods: {
        buy(item) {
            var _this = this;
            if (item.discountKey) {
                _this.stripeFunc();
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
                            _this.stripeFunc();


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
                width: 250px;
                position: relative;
                overflow: hidden;
                .inner {
                    // background: linear-gradient(#fefdeb, #fcfdef);
                }
                .imgCenter {
                    text-align: center; // background-color: #fff;
                    img {
                        width: 220px; // height: 108px;
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
                    bottom: 10px;
                    cursor: pointer;
                }
                .operateGrey {
                    display: flex;
                    justify-content: space-between;
                    align-content: center;
                    margin-top: 27px;
                    cursor: pointer;
                }
                .info {
                    position: absolute;
                    right: 20px;
                    top: 160px;
                    width: 100px;
                    width: 100px;
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
</style>