<template>
  <div class="container">
    <v-icon :name="this.icon" />
    <div class="value">{{ this.value }}</div>
    <div class="text">{{ this.text }}</div>
  </div>
</template>
<script>
export default {
  name: "CardBriefStat",
  props: {
    text: String,
    value: String,
    icon: String,
  },
};
</script>
<style lang="scss" scoped>
.container {
  @include dflex($justify: normal, $align: center, $flex: column);
  color: $text-color-white;
  svg {
    width: 30px;
    height: 30px;
    color: $text-color-white;
  }
}
</style>
