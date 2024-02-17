<template>
  <div class="user_catalog">
    <div class="header">My {{ this.listingType }}</div>
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
  props: {
    listingType: String,
  },
  data() {
    return {
      cardsList: [],
    };
  },
  components: {
    DesignCard,
  },
  mounted() {
    this.initialRenderHandler();
  },

  methods: {
    initialRenderHandler() {
      if (this.listingType.toLowerCase() === "wishlist") {
        //  get wishlist
      } else {
        // get user catalog
      }
    },
  },
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
    height: 100%;
    margin-top: 1.5rem;
    .card {
      width: 30%;
      height: 45%;
    }
  }
}
</style>
