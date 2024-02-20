<template>
  <div class="related_items_container">
    <div class="related_items">
      <div class="header">Related Items</div>
      <div class="items">
        <DesignCard />
        <DesignCard />
        <DesignCard />
      </div>
    </div>
  </div>
</template>
<script>
import DesignCard from "../Widgets/DesignCard.vue";
export default {
  name: "RelatedItems",
  components: {
    DesignCard,
  },
};
</script>
<style lang="scss" scoped>
.related_items_container {
  @include dflex($justify: normal, $flex: column);
  width: 100%;
  min-height: 80vh;
  height: fit-content;

  .related_items {
    @include dflex($justify: normal, $flex: column);
    width: 80%;
    height: 60vh;

    .header {
      @include header($fsize: 1.8rem, $shadow: none);
      @include dflex($justify: start, $align: normal);
      width: 100%;
    }
    .items {
      @include dflex;
      width: 100%;
      height: 80%;
    }
  }
}
</style>
