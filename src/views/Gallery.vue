<template>
    <div class="gallery-container">
        <TrendingSection />
    </div>
</template>
<script>
import TrendingSection from "../components/Gallery/TrendingSection.vue";
export default {
    name: "Gallery",
    components: {
        TrendingSection
    }
}
</script>
<style lang="scss" scoped>
.gallery-container {
    width: 100%;
    min-height: 100vh;
    height: fit-content;
}
</style>