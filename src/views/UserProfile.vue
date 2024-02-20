<!-- This page contains information about user (its catalog, wishlist, other user details) -->

<template>
  <div class="user_profile_container">
    <IntroComponent :content="this.emptyComponent" />
    <BaseView />
  </div>
</template>
<script>
import IntroComponent from "../components/Home/IntroComponent.vue";
import BaseView from "../components/UserProfile/BaseView.vue";
export default {
  name: "UserProfile",
  components: {
    IntroComponent,
    BaseView,
  },
  data() {
    return {
      emptyComponent: () => {},
    };
  },
};
</script>
<style lang="scss" scoped>
.user_profile_container {
  @include dflex($justify: normal, $flex: column);
  width: 100%;
  height: fit-content;
  position: relative;
}
</style>
