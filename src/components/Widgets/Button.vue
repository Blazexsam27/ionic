<template>
  <div class="button_container" @click="this.onClick()">
    {{ this.text }}
  </div>
</template>
<script>
export default {
  name: "Button",
  props: {
    text: String,
    onClick: {
      default: () => {},
      type: Function,
    },
  },
};
</script>
<style lang="scss" scoped>
.button_container {
  @include dflex;
  min-width: 150px;
  min-height: 35px;

  width: fit-content;
  height: fit-content;
  color: $text-color-white;
  cursor: pointer;

  padding: 5px 15px;
  border-radius: 10px;
  background-color: $blue;
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    background-color: $orange;
  }
}
</style>
