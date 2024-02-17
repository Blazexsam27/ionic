<template>
  <div :style="{ width, height, background, color }" class="custom-component">
    {{ this.text }}
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: "120px",
    },
    height: {
      type: String,
      default: "50px",
    },
    background: {
      type: String,
    },
    color: {
      type: String,
      default: "#fff",
    },
    text: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-component {
  @include dflex;
  padding: 5px;
  border-radius: 5px;
  background: $orange-red;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transition: 0.4s;
    transform: scale(0.98);
  }
}
</style>
