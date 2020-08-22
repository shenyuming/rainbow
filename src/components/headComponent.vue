<template>
    <div class="headTitleWrap">
        <div class="top">
            <div id="showPart" v-show="showSlid" @click="openSlid">
                <!-- <img class="titie" src="../assets/image/goods-title.png" alt="" /> -->
                <img class="titie" src="../assets/image/arrowZhan.png" alt="" />
            </div>
            <div class="allInfo" v-show="showAll">
                <p class="itemImg" @click="openAll">
                    <img class="imgGoods" src="../assets/image/arrowZhan.png" alt="" />
                </p>
                <div v-show="showAll">
                    <p class="item active">Datacenter</p>
                    <p class="item">Top Up</p>
                    <p class="item">Product</p>
                    <p class="item">Terms</p>
                    <p class="item">My Count</p>
                    <p class="item">Support</p>
                </div>
            </div>
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
        openSlid() {
            this.showAll = true;
            this.showSlid = false;
            console.log(this.showAll)
            if (this.showAll) {
                console.log($('.allInfo'))
                $('.allInfo').animate({
                    width: '700px'
                }, 1000); //菜单块向右移动
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
    .titie {
        height: 58px;
        cursor: pointer;
    }
    .allInfo {
        background-color: #fff;
        height: 36px;
        line-height: 36px;
        border-radius: 36px;
        position: relative;
        left: 10px;
        top: 8px;
        width: 144px; // overflow: hidden;
        .itemImg {
            position: absolute;
            .imgGoods {
                height: 58px;
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
