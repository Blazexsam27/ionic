<template >
    <div class="test">
        <div class="inner_orbit">
            <!-- <div class="inner_1"></div> -->
            <v-icon class="inner_1" name="vi-file-type-reactjs" />
        </div>
        <div class="middle_orbit">
            <!-- <div class="middle_1"></div> -->
            <v-icon class="middle_1" name="vi-file-type-angular" />
        </div>
        <div class="outer_orbit">
            <div class="outer_1"></div>
            <v-icon class="outer_1" name="vi-file-type-vue" />
        </div>
    </div>
</template>
<script>
export default {
    name: "test"
}
</script>
<style lang="scss" scoped>
.test {
    width: 100%;
    height: 100%;


    .inner_orbit {
        position: absolute;
        top: 75px;
        left: 75px;
        width: 150px;
        height: 150px;
        border: 2px #4A437F dashed;
        border-radius: 100%;
        -webkit-animation: spin-right 25s linear infinite;
        animation: spin-right 25s linear infinite;
    }

    .inner_1 {
        position: absolute;
        top: 62px;
        left: -6px;
        height: 10px;
        width: 10px;
        border-radius: 100%;
    }

    .middle_orbit {
        position: absolute;
        top: 35px;
        left: 35px;
        width: 225px;
        height: 225px;
        border: 2px #4A437F dashed;
        border-radius: 100%;
        -webkit-animation: spin-right 30s linear infinite;
        animation: spin-right 30s linear infinite;
    }

    .middle_1 {
        position: absolute;
        top: 25px;
        left: 17px;
        height: 50px;
        width: 50px;
        border-radius: 100%;
    }

    .outer_orbit {
        position: absolute;
        top: 0;
        left: 0;
        width: 294px;
        height: 294px;
        border: 2px #4A437F dashed;
        border-radius: 100%;
        -webkit-animation: spin-right 35s linear infinite;
        animation: spin-right 35s linear infinite;
    }

    .outer_1 {
        position: absolute;
        top: -17px;
        left: 125px;
        height: 50px;
        width: 50px;
        border-radius: 100%;
    }

    @keyframes spin-right {
        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
}
</style>