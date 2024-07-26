<template>
  <div class="product_info_container">
    <IntroComponent :content="this.topSection" />
    <ProductFeatures />
    <Pricing />
    <RelatedItems />
    <FAQ />
  </div>
</template>
<script>
import IntroComponent from "@/components/Home/IntroComponent.vue";
import TopSection from "../components/ProductInfo/TopSection.vue";
import ProductFeatures from "../components/ProductInfo/ProductFeatures.vue";
import Pricing from "../components/ProductInfo/Pricing.vue";
import RelatedItems from "../components/ProductInfo/RelatedItems.vue";
import FAQ from "@/components/ProductInfo/FAQ.vue";
export default {
  name: "ProductInfo",
  data() {
    return {
      topSection: TopSection,
      id: "",
    };
  },

  components: {
    IntroComponent,
    TopSection,
    ProductFeatures,
    Pricing,
    RelatedItems,
    FAQ,
  },
};
</script>
<style lang="scss" scoped>
.product_info_container {
  @include dflex($justify: normal, $flex: column);
  width: 100%;
  height: fit-content;
}
</style>
