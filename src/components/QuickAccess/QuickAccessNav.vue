<template>
  <div class="quick_access_nav_container">
    <nav>
      <router-link to="/gallery/all">All</router-link>
      <router-link to="/gallery/dashboard">Dasboards</router-link>
      <router-link to="/gallery/landging_pages">Landing Pages</router-link>
      <router-link to="/gallery/free_templates">Free Templates</router-link>
      <router-link to="/gallery/premium_templates"
        >Premium Templates</router-link
      >
      <router-link to="/gallery/angular">Angular</router-link>
      <router-link to="/gallery/react">React</router-link>
      <router-link to="/gallery/vue">Vue</router-link>
      <router-link to="/gallery/tailwind">Tailwind</router-link>
      <router-link to="/gallery/bootstrap">Bootstrap</router-link>
    </nav>
  </div>
</template>
<script>
export default {
  name: "QuickAccessNav",
};
</script>
<style lang="scss" scoped>
.quick_access_nav_container {
  @include dflex(center, normal);
  width: 100%;
  height: fit-content;

  nav {
    @include dflex(space-between, center);
    padding: 0 1.5rem;
    width: 80%;
    height: 90px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    background: $green;

    position: relative;
    top: -2.5rem;
    a {
      text-decoration: none;
      color: $text-color-white;
      transition: 0.4s;
      &:hover {
        color: $orange-red;
        transition: 0.4s;
      }
    }
  }
}
</style>
