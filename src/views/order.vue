<template>
    <div>
        <cloud-component></cloud-component>
        <head-component></head-component>
        <div class="orderWrap">
            <div class="leftInfo">
                <div class="typeWrap">
                    <div class="title">TYPE</div>
                    <div class="type" v-for="item in chooseType" :key="item.name">
                        <p class="typeLi">
                            {{item.name}}
                        </p>
                    </div>
                </div>
                <!-- <div class="noStatus content">
                                    <img class="noStatus" src="../assets/image/rainNo.png" alt="">
                                </div> -->
                <div class="hasStatus content">
                    <div class="hasInner">
                        少时诵诗书所所所撒所多多多多多多多多多多多多多多多多多多多多多
                    </div>
                    <img class="copy" src="../assets/image/copy.png" alt="">
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
                <div class="generate purple">
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
    export default {
        name: "order",
        components: {
            cloudComponent,
            headComponent
        },
        data() {
            return {
                selectList: [{
                    type: {}
                }, ],
                chooseType: [{
                    name: '2.0'
                }, {
                    name: '3.0'
                }],
                chooseWeb: [{
                    name: 'Footisite'
                }, {
                    name: 'Shopify'
                }],
                chooseRegion: [{
                    name: 'US'
                }, {
                    name: 'DE'
                }, {
                    name: 'AU'
                }, {
                    name: 'UK'
                }, {
                    name: 'FR'
                }],
                selectType: '',
                selectWeb: '',
                selectRegion: '',
                amount: ''
            }
        },
        methods: {},
        computed: {},
        created() {},
    };
</script>

<style lang="scss" scoped>
    .orderWrap {
        width: 1000px;
        margin: 0 auto;
        position: relative;
        .typeWrap {
            position: absolute;
            left: 70px;
            top: -20px;
            color: #fff;
            background-color: #ff496f;
            text-align: center;
            line-height: 25px;
            border-radius: 15px;
            padding: 10px 20px;
            .title {
                // border-bottom: 1px solid #fff;
            }
            .type {
                .typeLi {
                    margin: 5px 0;
                }
            }
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
                background: -webkit-linear-gradient(to right, #ba86e8, #cba5cc);
                background: -o-linear-gradient(to right, #ba86e8, #cba5cc);
                background: -moz-linear-gradient(to right, #ba86e8, #cba5cc);
                background: linear-gradient(to right, #ba86e8, #cba5cc);
            }
            .grey {
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