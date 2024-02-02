<template>
  <div class="trending_designs_container">
    <div class="header">Trending Designs</div>
    <MarqueeAnimation class="marq" :pause-on-hover="false">
      <div class="card" v-for="img in this.marqueeData" :key="img">
        <img :src="img" alt="trending,free_premium,web,designs" />

        <!-- <p>New Design</p> -->
      </div>
    </MarqueeAnimation>
    <div class="explore">
      <AnimatedButton
        text="Explore More"
        icon="md-keyboarddoublearrowrigh-round"
      />
    </div>
  </div>
</template>
<script>
import bundle_ad_bg from "../../assets/images/bundle_ad_bg.jpg";
import latest_release_bg from "../../assets/images/latest_release_bg.jpg";
import AnimatedButton from "../Widgets/AnimatedButton.vue";
export default {
  name: "TrendingDesigns",
  components: {
    AnimatedButton,
  },
  data() {
    return {
      marqueeData: [bundle_ad_bg, latest_release_bg],
    };
  },
};
</script>
<style lang="scss" scoped>
.trending_designs_container {
  width: 100%;
  height: 60vh;
  margin-top: 3.5rem;
  .header {
    @include header($fsize: 2rem, $shadow: none);
    @include dflex;
    width: 100%;
  }

  .card {
    width: 300px;
    height: 250px;
    margin: 0 1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .marq {
    padding-top: 5.5rem;
    gap: 2rem;
    overflow-y: hidden;
  }

  .explore {
    @include dflex;
    padding: 3rem 0;
    margin-bottom: 2rem;
  }
}
</style>
