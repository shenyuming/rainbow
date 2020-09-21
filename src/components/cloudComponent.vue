<template>
    <div class="cloudWrap">
        <img class="cloud1" src="../assets/image/cloud1.png" alt="" />
        <img class="cloud2" src="../assets/image/cloud2.png" alt="" />
        <img class="cloud3" src="../assets/image/cloud3.png" alt="" />
        <img class="horse" src="../assets/image/horse.png" alt="" />
        <!-- <div class="waveWrapper waveAnimation">
                                                <div class="waveWrapperInner bgTop">
                                                    <div class="wave waveTop" :style="{ 'backgroundImage':'url('+ urlIcon +')' }"></div>
                                                </div>
                                                 <div class="waveWrapperInner bgMiddle">
                                    		    <div class="wave waveMiddle" :style="{ 'backgroundImage':'url('+ urlIcon1 +')' }"></div>
                                    		  </div>
                                            </div> -->
        <div class="whiteWaveWrap">
            <div class="whiteWaveInner" :style="{ 'backgroundImage':'url('+ urlIcon1+')' }">
            </div>
        </div>
        <div class="blueWaveWrap">
            <div class="blueWaveInner" :style="{ 'backgroundImage':'url('+ urlIcon +')' }">
            </div>
        </div>
    </div>
</template>

<script>
import img from '../assets/image/blueWave.png'
import img1 from '../assets/image/whiteWave.png'
export default {
    name: 'cloudComponent',
    data() {
        return {
            urlIcon: img,
            urlIcon1: img1
        }
    },
    watch: {},
    computed: {},
    methods: {

    },
    mounted() {

    }
}
</script>

<style lang="scss">
html,body{
    overflow: hidden;
    overflow-y: auto;
    min-height: 800px;
}
.cloudWrap {
    .cloud1 {
        position: absolute;
        bottom: 140px;
        left: 80px;
        height: 45px;
        -o-animation: bounce-down1 4s linear infinite;
        -webkit-animation: bounce-down1 3s linear infinite;
        animation: bounce-down1 3s linear infinite;
    }
    .cloud2 {
        position: absolute;
        bottom: 80px;
        right: 120px;
        height: 72px;
        -o-animation: bounce-down2 4s linear infinite;
        -webkit-animation: bounce-down2 3s linear infinite;
        animation: bounce-down2 3s linear infinite;
    }
    .cloud3 {
        position: absolute;
        top: 100px;
        right: 80px;
        -o-animation: bounce-down3 4s linear infinite;
        -webkit-animation: bounce-down3 4s linear infinite;
        animation: bounce-down3 4s linear infinite;
    }
    .horse {
        position: fixed;
        bottom: 30px;
        right: 40px;
        height: 50px;
        z-index: 10;
         -o-animation: bounce-down3 4s linear infinite;
        -webkit-animation: bounce-down3 4s linear infinite;
        animation: bounce-down3 4s linear infinite;
    }
    .whiteWaveWrap {
        overflow: hidden;
        width: 100%;
        .whiteWaveInner {
            position: fixed;
            bottom: 20px;
            right: 0;
            width: 200%;
            background-repeat: repeat-x;
            background-size: 100%;
            height: 40px;
            left: -50%;
            animation: move_wave 18s linear infinite;
        }
    }
    .blueWaveWrap {
        overflow: hidden;
        width: 100%;
        .blueWaveInner {
            position: fixed;
            bottom: 0;
            right: 0;
            width: 200%;
            background-repeat: repeat-x;
            background-size: 100%;
            height: 40px;
            left: -50%;
            animation: move_wave 12s linear infinite;
        }
    }
    @keyframes move_wave {
        0% {
            transform: translateX(0) translateZ(0) scaleY(1)
        }
        50% {
            transform: translateX(15%) translateZ(0) scaleY(1)
        }
        100% {
            transform: translateX(25%) translateZ(0) scaleY(1)
        }
    }
    @keyframes bounce-down1 {
        25% {
            -webkit-transform: translateY(5px);
        }
        50%,
        100% {
            -webkit-transform: translateY(0);
        }
        75% {
            -webkit-transform: translateY(5px);
        }
    }
    @keyframes bounce-down2 {
        25% {
            -webkit-transform: translateY(6px);
        }
        50%,
        100% {
            -webkit-transform: translateY(0);
        }
        75% {
            -webkit-transform: translateY(6px);
        }
    }
    @keyframes bounce-down3 {
        25% {
            -webkit-transform: translateY(8px);
        }
        50%,
        100% {
            -webkit-transform: translateY(0);
        }
        75% {
            -webkit-transform: translateY(8px);
        }
    }
    @keyframes shadow {
        0%,
        100% {
            transform: scaleX(1);
        }
        50% {
            transform: scaleX(1.2);
        }
    }
}
</style>
