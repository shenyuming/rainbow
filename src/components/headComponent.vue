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
                    <p class="item active">Datacenter</p>
                    <p class="item" @click="toUp">Top Up</p>
                    <p class="item" @click="gohome">Product</p>
                    <p class="item" @click="goSupport">Terms</p>
                    <p class="item" @click="gologin">My Count</p>
                    <p class="item" @click="goSupport">Support</p>
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
    computed: {},
    methods: {
        goContact(){
           window.location.href= 'http://www.proxyrainbow.com/contactus.html'
        },
        hrefNewWay(){
            window.location.href="http://www.proxyrainbow.com/shipping.html"
        },
        toUp() {
            window.scrollTo(0, 0)
        },
        gohome() {
            this.$router.push({ path: '/home' })
        },
        gologin() {
            this.$router.push({ path: '/login' })
        },
        goSupport() {
            this.$router.push({ path: '/about' })
        },
        openSlid() {
            this.showAll = true;
            this.showSlid = false;
            if (this.showAll) {
                $('.allInfo').animate({
                    width: '700px'
                }, 1000);
            }
        },
        openAll() {
            this.showSlid = true;
            this.showAll = false;
            console.log(this.showAll)
            if (this.showSlid) {
                $('.allInfo').animate({
                    width: '-700px'
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
    .top{
        float: left;
    }
    .other{
        float: right;
        font-size:18px;
        color:#1a9bff;
        cursor: pointer;
    }
    .contact{
         float: right;
        font-size:18px;
        color:#1a9bff;
        cursor: pointer;
         margin-right: 40px;
    }
    .titie {
        height: 36px;
        box-shadow: -2px 0px 10px #aaa, /*左边阴影*/
        0px -2px 10px #aaa, /*上边阴影*/
        4px 0px 10px #aaa, /*右边阴影*/
        0px 5px 10px #aaa;
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
        box-shadow: -2px 0px 10px #aaa, /*左边阴影*/
        0px -2px 10px #aaa, /*上边阴影*/
        4px 0px 10px #aaa, /*右边阴影*/
        0px 5px 10px #aaa;
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
        .active {
            color: #ba86ea;
        }
    }
}
</style>
