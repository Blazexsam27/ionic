<template>
  <div class="trending_designs_container">
    <div class="header">Trending Designs</div>
    <MarqueeAnimation class="marq" :pause-on-hover="false">
      <div
        class="card"
        v-for="item in homePageCards"
        :key="item.filesUrl.thumbnailUrls[0]"
      >
        <img
          :src="item.filesUrl.thumbnailUrls[0]"
          alt="trending,free_premium,web,designs"
        />

        <!-- <p>New Design</p> -->
      </div>
    </MarqueeAnimation>
  </div>
</template>
<script>
import bundle_ad_bg from "../../assets/images/bundle_ad_bg.jpg";
import latest_release_bg from "../../assets/images/latest_release_bg.jpg";
import AnimatedButton from "../Widgets/AnimatedButton.vue";
import { mapGetters, mapState } from "vuex";
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
  computed: {
    ...mapState("home", ["loading", "error"]),
    ...mapGetters("home", ["homePageCards"]),
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
    width: 350px;
    height: 320px;
    margin: 0 1rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      aspect-ratio: 16/9;
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
