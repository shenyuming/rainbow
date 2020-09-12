<template>
    <div>
        <cloud-component></cloud-component>
        <div class="homeWrap">
            <head-component></head-component>
            <div class="main">
                <ul>
                    <li>
                        <div class="inner">
                            <div class="imgCenter">
                                <img src="../assets/image/icon1.png" alt="">
                            </div>
                            <p class="brand">RainBow Resi 2.0</p>
                            <div class="detail">
                                <p style="font-size:14px;color:#6a6a6a">Support sites:</p>
                                <p>Nike/Mesh/Shopify</p>
                                <p>Supreme/Footsite US</p>
                                <p>Finishline/JD/Yeezysupply</p>
                                <p>Shoepalace/Foolocler EU/AU</p>
                                <p>And More</p>
                            </div>
                            <div class="holder">
                                <input class="discount" type="text" placeholder="Discount">
                                <span class="apply">apply</span>
                            </div>
                            <div class="operate">
                                <div @click="showDetail()">
                                    <img classs="size" src="../assets/image/plan.png" alt="">
                                </div>
                                <div @click="hrefNewWay">
                                    <img class="buy" src="../assets/image/buy.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="info" v-if="showFlag">
                            <div class="likeUl" v-for="(item,index) in sizeList" :key="index">
                                <p :class="{'active': index == activeLinkId}">{{item.name}}</p>
                            </div>
                            <div class="nav nav-border"></div>
                            <div class="nav nav-background"></div>
                        </div>
                    </li>
                    <li>
                        <div class="inner">
                            <div class="imgCenter">
                                <img src="../assets/image/icon3.png" alt="">
                            </div>
                            <p class="brand">RainBow Resi 3.0</p>
                            <div class="detail">
                                <p style="font-size:14px;color:#6a6a6a">Support sites:</p>
                                <p>Nike/Mesh/Shopify</p>
                                <p>Supreme/Footsite US</p>
                                <p>Finishline/JD/Yeezysupply</p>
                                <p>Shoepalace/Foolocler EU/AU</p>
                                <p>And More</p>
                            </div>
                            <div class="holder">
                                <input class="discount" type="text" placeholder="Discount">
                                <span class="apply">apply</span>
                            </div>
                            <div class="operate">
                                <div @click="showDetail()">
                                    <img classs="size" src="../assets/image/plan.png" alt="">
                                </div>
                                <div @click="hrefNewWay">
                                    <img class="buy" src="../assets/image/buy.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="info" v-if="showFlag1">
                            <div class="likeUl" v-for="(item,index) in sizeList1" :key="index">
                                <p :class="{'active': index == activeLinkId}">{{item.name}}</p>
                            </div>
                            <div class="nav nav-border"></div>
                            <div class="nav nav-background"></div>
                        </div>
                    </li>
                    <li>
                        <div class="inner">
                            <div class="imgCenter">
                                <img src="../assets/image/icon2.png" alt="">
                            </div>
                            <p class="brand">RainBow ISP</p>
                            <div class="detail">
                                <p style="font-size:14px;color:#6a6a6a">Support sites:</p>
                                <p>Nike/Mesh/Shopify</p>
                                <p>Supreme/Footsite US</p>
                                <p>Finishline/JD/Yeezysupply</p>
                                <p>Shoepalace/Foolocler EU/AU</p>
                                <p>And More</p>
                            </div>
                            <div class="holder">
                                <input class="discount" type="text" placeholder="Discount">
                                <span class="apply">apply</span>
                            </div>
                            <div class="operate">
                                <div @click="showDetail()">
                                    <img classs="size" src="../assets/image/plan.png" alt="">
                                </div>
                                <div @click="hrefNewWay">
                                    <img class="buy" src="../assets/image/buy.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="info" v-if="showFlag2">
                            <div class="likeUl" v-for="(item,index) in sizeList2" :key="index">
                                <p :class="{'active': index == activeLinkId}">{{item.name}}</p>
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
                                <div @click="showDetail()">
                                    <img classs="size" src="../assets/image/planGrey.png" alt="">
                                </div>
                                <div @click="hrefNewWay">
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
export default {
    name: "home",
    data() {
        return {
            sizeList: [
                { name: '5GB-$55', id: 0 },
                { name: '10GB-$100', id: 1 },
                { name: '15GB-$135', id: 2 },
                { name: '20GB-$170', id: 3 },
                { name: '25GB-$200', id: 4 },
            ],
            activeLinkId: 0,
            showFlag: false,
            sizeList1: [
                { name: '5GB-$55', id: 0 },
                { name: '10GB-$100', id: 1 },
                { name: '15GB-$135', id: 2 },
                { name: '20GB-$170', id: 3 },
                { name: '25GB-$200', id: 4 },
            ],
            activeLinkId1: 0,
            showFlag1: false,
            sizeList2: [
                { name: '5GB-$55', id: 0 },
                { name: '10GB-$100', id: 1 },
                { name: '15GB-$135', id: 2 },
                { name: '20GB-$170', id: 3 },
                { name: '25GB-$200', id: 4 },
            ],
            activeLinkId2: 0,
            showFlag2: false,
        }
    },
    components: {
        headComponent,
        cloudComponent
    },
    methods: {
        showDetail() {
            this.showFlag = !this.showFlag
        },
        showDetail1() {
            this.showFlag1 = !this.showFlag1
        },
        showDetail2() {
            this.showFlag2 = !this.showFlag2
        },
        hrefNewWay() {
            window.location.href = "http://www.proxyrainbow.com/shipping.html"
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
                    color: red;
                    padding-left: 30px;
                    font-size: 18px;
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
                .operateGrey{
                    display: flex;
                    justify-content: space-between;
                    align-content: center;
                    margin-top: 27px;
                    cursor: pointer;
                }
                .info {
                    position: absolute;
                    right: 20px;
                    top: 120px;
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
                        }
                        &:hover {
                            background-color: #ba86ea;
                            border-radius: 10px;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
}
</style>