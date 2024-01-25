<template>
  <div class="home-container">
    <IntroComponent />
    <QuickAccessNav />
    <BundleAds />
    <LatestReleases />
    <TrendingDesigns />
    <PopularBundles />
    <BlogAd />
  </div>
</template>
<script>
import IntroComponent from "../components/Home/IntroComponent.vue";
import QuickAccessNav from "../components/QuickAccess/QuickAccessNav.vue";
import BundleAds from "../components/QuickAccess/BundleAds.vue";
import LatestReleases from "../components/Home/LatestReleases.vue";
import TrendingDesigns from "../components/Home/TrendingDesigns.vue";
import PopularBundles from "../components/Home/PopularBundles.vue";
import BlogAd from "../components/Home/BlogAd.vue";
export default {
  name: "Home",
  components: {
    IntroComponent,
    QuickAccessNav,
    BundleAds,
    LatestReleases,
    TrendingDesigns,
    PopularBundles,
    BlogAd,
  },
};
</script>
<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: fit-content;
}
</style>
