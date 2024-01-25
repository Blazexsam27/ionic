<template>
  <div class="popular_bundles_container">
    <div class="header">Popular Bundles</div>
    <div class="popular_bundles">
      <div v-for="item of this.bundleCardList">
        <BundleCard
          :icon="item.icon"
          :title="item.title"
          :subtitle="item.subtitle"
          :briefData="item.briefData"
          :bgColor="item.bgColor"
          :bgImg="item.bgImg"
        />
      </div>
    </div>
    <div class="view_all_button">
      <AnimatedButton text="View All Bundles" />
    </div>
  </div>
</template>
<script>
import BundleCard from "../Widgets/BundleCard.vue";
import popular_bundle_bg_1 from "../../assets/images/popular_bundle_bg_1.jpg";
import popular_bundle_bg_2 from "../../assets/images/popular_bundle_bg_2.jpg";
import popular_bundle_bg_3 from "../../assets/images/popular_bundle_bg_3.jpg";
import AnimatedButton from "../Widgets/AnimatedButton.vue";
export default {
  name: "PopularBundles",
  components: {
    BundleCard,
    AnimatedButton,
  },
  data() {
    return {
      bundleCardList: [
        {
          icon: "vi-file-type-tailwind",
          title: "Tailwind Bundle",
          subtitle: "Get access to all of our Tailwind CSS Premium templates",
          bgColor: "#2294f0",
          bgImg: popular_bundle_bg_1,
          briefData: [
            { icon: "md-widgets-round", value: "15", text: "Products" },
            { icon: "si-jetpackcompose", value: "500+", text: "Components" },
            { icon: "si-stackbit", value: "50+", text: "Sections" },
          ],
        },
        {
          icon: "vi-file-type-vue",
          title: "Vue Bundle",
          subtitle: "Get access to all of our Vue Premium templates",

          bgColor: "#26de81",
          bgImg: popular_bundle_bg_2,
          briefData: [
            { icon: "md-widgets-round", value: "20", text: "Products" },
            { icon: "si-jetpackcompose", value: "600+", text: "Components" },
            { icon: "si-stackbit", value: "50+", text: "Sections" },
          ],
        },
        {
          icon: "vi-file-type-reactjs",
          title: "React Bundle",
          bgColor: "#3bbcfd",
          subtitle: "Get access to all of our React Premium templates",
          bgImg: popular_bundle_bg_3,
          briefData: [
            { icon: "md-widgets-round", value: "25", text: "Products" },
            { icon: "si-jetpackcompose", value: "700+", text: "Components" },
            { icon: "si-stackbit", value: "50+", text: "Sections" },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.popular_bundles_container {
  @include dflex($justify: normal, $flex: column);
  width: 100%;
  height: 85vh;
  padding-top: 8.5rem;

  .header {
    @include header($fsize: 2rem, $shadow: none);
    @include dflex($justify: start, $align: normal);
    width: 75%;
    padding-bottom: 1rem;
  }
  .popular_bundles {
    @include dflex($align: normal, $gap: 2rem);
    width: 75%;
    height: 100%;
    div {
      width: 100%;
    }
  }
  .view_all_button {
    margin: 3rem 0;
  }
}
</style>
