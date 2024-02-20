<template>
  <div :class="this.customClass" @click="this.onClick()">
    {{ this.text }}
  </div>
</template>
<script>
export default {
  name: "CurveButton",
  props: {
    text: String,
    customClass: {
      default: "curve_button",
      type: String,
    },
    onClick: {
      default: () => {},
      type: Function,
    },
  },
};
</script>
<style lang="scss" scoped>
.curve_button {
  @include dflex;

  width: 100%;
  height: 100%;
  color: $text-black-08;
  cursor: pointer;

  border-radius: 20px;
  padding: 5px 15px;
  background: $white;
  transition: 0.5s;
  font-size: 1rem;
  &:hover {
    transition: 0.5s;
    background: $purple;
    color: $text-color-white;
  }
}

.small_button {
  @include dflex;
  min-width: 80px;
  min-height: 30px;

  width: fit-content;
  height: fit-content;
  border-radius: 1px solid $text-color-white;

  padding: 2px 10px;
  font-size: inherit;
  border-radius: 20px;
  cursor: pointer;

  background: $lavendar-grad;
  color: $text-black-08;
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
