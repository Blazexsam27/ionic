<template>
  <div class="user_catalog">
    <div class="header">My Catalog</div>
    <div class="cards_container">
      <div class="card">
        <DesignCard
          title="Sample Design"
          subTitle="Fullstack responsive design"
          price="59"
          :showPrice="false"
        />
      </div>
      <div class="card">
        <DesignCard
          title="Sample Design"
          subTitle="Fullstack responsive design"
          price="59"
          :showPrice="false"
        />
      </div>
      <div class="card">
        <DesignCard
          title="Sample Design"
          subTitle="Fullstack responsive design"
          price="59"
          :showPrice="false"
        />
      </div>
    </div>
  </div>
</template>
<script>
import DesignCard from "../Widgets/DesignCard.vue";
export default {
  name: "UserCatalog",

  data() {
    return {
      cardsList: [],
    };
  },
  components: {
    DesignCard,
  },
  mounted() {},

  methods: {},
};
</script>
<style lang="scss" scoped>
.user_catalog {
  @include dflex($justify: start, $align: center, $flex: column, $wrap: nowrap);
  width: 100%;
  height: 100%;
  margin-left: 2rem;
  .header {
    @include dflex($align: normal);
    @include header;
    width: 100%;
    margin-top: 1rem;
  }
  .cards_container {
    @include dflex($justify: start, $align: start, $gap: 1.5rem);
    width: 100%;
    height: 250px;
    margin-top: 1.5rem;
    .card {
      width: 30%;
      height: 100%;
    }
  }
}
</style>
