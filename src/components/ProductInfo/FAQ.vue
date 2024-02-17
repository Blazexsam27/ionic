<template>
  <div class="faq_container">
    <div class="faqs">
      <Accordion :items="this.accordionItems" />
    </div>
  </div>
</template>
<script>
import Accordion from "../Widgets/Accordion.vue";
export default {
  name: "FAQ",
  components: { Accordion },
  data() {
    return {
      accordionItems: [
        { title: "Item 1", content: "Content for Item 1", expanded: false },
        { title: "Item 2", content: "Content for Item 2", expanded: false },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.faq_container {
  width: 100%;
  min-height: 100vh;
  height: fit-content;

  .faqs {
    width: 80%;
    min-height: 80vh;
  }
}
</style>
