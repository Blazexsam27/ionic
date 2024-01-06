<template>
    <div class="home-container">
        <IntroComponent />
    </div>
</template>
<script>
import IntroComponent from "../components/IntroComponent/IntroComponent.vue"
export default {
    name: "Home",
    components: {
        IntroComponent
    }
}
</script>
<style lang="scss">
.home-container {
    width: 100%;
    height: fit-content;
}
</style>