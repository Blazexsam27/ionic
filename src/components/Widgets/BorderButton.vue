<template>
  <div class="border_button" @click="this.click">{{ this.text }}</div>
</template>
<script>
export default {
  name: "BorderButton",
  props: {
    text: String,
    click: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
<style lang="scss" scoped>
.border_button {
  @include dflex();
  width: 100%;
  height: 100%;

  border: 1px solid $text-color-white;
  border-radius: 15px;
  padding: 5px 10px;
  color: $text-color-white;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    background: $orange-red;
  }
}

.black {
  color: $text-black-08;
  border: 1px solid $text-black-08;
}
</style>
