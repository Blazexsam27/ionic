<template>
  <div class="animated_button">
    <span>{{ this.text }}</span>
    <v-icon class="icon" name="md-keyboarddoublearrowright-round" />
  </div>
</template>
<script>
export default {
  name: "AnimatedButton",
  props: {
    text: String,
    onClick: {
      type: Function,
      default: () => {},
    },
    icon: String,
  },
};
</script>
<style lang="scss" scoped>
.animated_button {
  @include dflex($gap: 10px);
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
  .icon {
    transition: 0.5s;
    width: 22px;
    height: 22px;
  }
  &:hover {
    transition: 0.5s;
    background-color: $orange;

    .icon {
      transition: 0.5s;
      transform: translateX(10px);
    }
  }
}
</style>
