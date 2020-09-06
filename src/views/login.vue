<template>
    <div>
        <cloud-component></cloud-component>
        <div class="loginWrap">
            <img class="logo" src="../assets/image/logo.png" alt="">
            <img class="welcome" src="../assets/image/welcome.png" alt="">
            <img class="discord" @click="login" src="../assets/image/discord.png" alt="">
        </div>
    </div>
</template>


<script>
import cloudComponent from '@/components/cloudComponent'
import Utils from "@/utils/util"
export default {
    name: "login",
    components: {
        cloudComponent
    },
    data() {
        return {}
    },
    methods: {
        login() {
        },
        logout() {
        }
    },
    computed: {},
    created() {},
    mounted() {
    }
};
</script>

<style lang="scss" scoped>
.loginWrap {
    width: 280px;
    padding: 50px 0 50px 0;
    border-radius: 20px;
    background-color: #fff;
    margin: 0 auto;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .logo {
        display: block;
        margin: 0 auto;
        height: 150px;
    }
    .welcome {
        display: block;
        margin: 0 auto;
        margin-bottom: 30px;
    }
    .main {
        .commonInput {
            background-color: #d3d3d3;
            border: 1px solid #d3d3d3;
            line-height: 50px;
            height: 50px;
            border-radius: 50px;
            width: 262px;
            margin: 0 auto;
            padding-left: 20px;
        }
        .name {
            margin-bottom: 25px;
        }
        .pwd {
            margin-bottom: 40px;
        }
    }
    .go {
        display: block;
        margin: 0 auto;
        margin-bottom: 10px;
        cursor: pointer;
    }
    .discord {
        display: block;
        margin: 0 auto;
        cursor: pointer;
    }
}
</style>