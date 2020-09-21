<template>
    <div class="headTitleWrap">
        <div class="top">
            <div id="showPart" v-show="showSlid" @click="openSlid">
                <img class="titie" src="../assets/image/goods-title.png" alt="" />
            </div>
            <div class="allInfo" v-show="showAll">
                <p class="itemImg" @click="openAll">
                    <img class="imgGoods" src="../assets/image/arrowZhan.png" alt="" />
                </p>
                <div v-show="showAll">
                    <p id="item1" class="item" :class="{'active1':isFlag1}" style="margin-left: 140px;" @click="gohome">Product</p>
                    <p id="item2" class="item" :class="{'active2':isFlag2}" @click="goOrder">Orders</p>
                    <p id="item2" class="item" :class="{'active4':isFlag4}" @click="goGenerate">Generate</p>    
                    <p id="item3" class="item" :class="{'active3':isFlag3}" @click="goSupport">Terms</p>
                    <!-- <p class="item" @click="gologin">My Count</p>
                            <p class="item" @click="goSupport">Support</p> -->
                </div>
            </div>
    
        </div>
    
        <div class="other" @click="goSupport">
            Terms & Conditions
        </div>
        <div class="contact" @click="goContact">
            contact us
        </div>
    </div>
</template>

<script>
export default {
    name: 'cloudComponent',
    data() {
        return {
            showSlid: true,
            showAll: false
        }
    },
    watch: {},
    computed: {
        isFlag1() {
            if (this.$route.path == '/home') {
                return true
            }
        },
        isFlag2() {
            if (this.$route.path == '/orderList') {
                return true
            }
        },
        isFlag3() {
            if (this.$route.path == '/about') {
                return true
            }
        },
        isFlag4(){
             if (this.$route.path == '/order') {
                return true
            }
        }

    },
    methods: {
        goContact() {
            window.location.href = 'http://www.proxyrainbow.com/contactus.html'
        },
        hrefNewWay() {
            window.location.href = "http://www.proxyrainbow.com/shipping.html"
        },
        gohome() {
            // document.getElementById("item2").classList.add("active2");
            this.$router.push({ path: '/home' })
        },
        goOrder() {
            this.$router.push({ path: '/orderList' })
           
        },
        goSupport() {
            this.$router.push({ path: '/about' })
        },
        goGenerate() {
            this.$router.push({ path: '/order' })
        },
        openSlid() {
            this.showAll = true;
            this.showSlid = false;
            if (this.showAll) {
                $('.allInfo').animate({
                    width: '620px'
                }, 1000);
            }
        },
        openAll() {
            this.showSlid = true;
            this.showAll = false;
            if (this.showSlid) {
                $('.allInfo').animate({
                    width: '-620px'
                }, 1000); //菜单块向左移动
            }
        }
    },
    mounted() {},
    created() {}
}
</script>

<style lang="scss" scoped>
.headTitleWrap {
    width: 1200px;
    margin: 40px auto;
    overflow: hidden;
    .top {
        float: left;
    }
    .other {
        float: right;
        font-size: 18px;
        color: #fff;
        cursor: pointer;
    }
    .contact {
        float: right;
        font-size: 18px;
        color: #fff;
        cursor: pointer;
        margin-right: 40px;
    }
    .titie {
        height: 36px;
        box-shadow: 2px 1px 4px #aaa;
        border-radius: 36px;
        cursor: pointer;
    }
    .allInfo {
        background-color: #fff;
        height: 34px;
        line-height: 34px;
        border-radius: 34px;
        position: relative;
        width: 144px;
        box-shadow: 2px 1px 4px #aaa;
        border-radius: 36px;
        .itemImg {
            position: absolute;
            top: -1px;
            .imgGoods {
                height: 36px;
                cursor: pointer;
            }
        }
        .item {
            float: left;
            padding: 0 30px;
            cursor: pointer;
            color: #737373;
        }
        .active1 {
            color: #ff4a6d;
        }
        .active2 {
            color: #fb9d6a;
        }
        .active3 {
            color: #5bcbf0;
        }
        .active4{
             color: #8fee90;
        }
    }
}
</style>
