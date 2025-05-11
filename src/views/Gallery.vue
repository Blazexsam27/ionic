<template>
  <div class="gallery-container">
    <!-- <TrendingSection /> -->
    <IntroComponent />
    <QuickAccessNav />
    <div class="content">
      <div class="left">
        <FilterSection />
      </div>
      <div class="right">
        <Catalog />
      </div>
    </div>
  </div>
</template>
<script>
import TrendingSection from "../components/Gallery/TrendingSection.vue";
import IntroComponent from "../components/Home/IntroComponent.vue";
import QuickAccessNav from "../components/QuickAccess/QuickAccessNav.vue";
import FilterSection from "../components/Gallery/FilterSection.vue";
import Catalog from "../components/Gallery/Catalog.vue";
export default {
  name: "Gallery",
  components: {
    TrendingSection,
    IntroComponent,
    QuickAccessNav,
    FilterSection,
    Catalog,
  },
};
</script>
<style lang="scss" scoped>
.gallery-container {
  @include dflex($justify: normal, $flex: column);
  width: 100%;
  height: fit-content;

  .content {
    @include dflex($align: start);
    width: 85%;
    height: fit-content;
    margin-top: 3rem;

    .left {
      width: 16%;
      height: 100vh;
      margin-top: 5rem;
    }
    .right {
      width: 80%;
    }
  }
}
</style>
