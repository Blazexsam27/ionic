<template>
  <div class="catalog_container">
    <div class="sort">
      <span class="sortby">SORT BY : </span>
      <span
        class="dropdown_btn"
        @click="this.sortDropdownActive = !this.sortDropdownActive"
      >
        <span>Most Downloaded </span>
        <v-icon name="md-arrowdropdown" />

        <div class="dropdown" :class="{ open: this.sortDropdownActive }">
          <span>Price: low to high</span>
          <span>Price: high to low</span>
          <span>Latest Releases</span>
          <span>Most Download</span>
        </div>
      </span>
    </div>
    <div class="content">
      <div class="item" v-for="item of homePageCards">
        <DesignCard
          :title="item.fileData.fileName"
          subTitle="Premium 5 dashboard templates"
          :price="item.fileData.price"
          :img="item.filesUrl?.thumbnailUrls[0]"
          :click="() => this.navigateToDetailsPage(item.uuid)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import DesignCard from "../Widgets/DesignCard.vue";
import { mapGetters, mapState } from "vuex";
export default {
  name: "Catalog",
  components: {
    DesignCard,
  },
  data() {
    return {
      sortDropdownActive: true,
    };
  },
  computed: {
    ...mapState("home", ["loading", "error"]),
    ...mapGetters("home", ["homePageCards"]),
  },
  methods: {
    navigateToDetailsPage(id) {
      const type = this.$route.params.type;
      this.$router.push(`/gallery/${type}/${id}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.catalog_container {
  @include dflex($justify: normal, $align: normal, $flex: column);

  .sort {
    @include dflex($justify: end);
    height: 50px;

    .sortby {
      font-size: 13px;
      color: $text-black-08;
      font-weight: 600;
    }

    .dropdown_btn {
      border-bottom: 1.2px solid $text-black-08;
      position: relative;
      cursor: pointer;
      @include accordion_animation(0px, 160px, dropdown);
      .dropdown {
        @include dflex($justify: normal, $flex: column);
        @include boxshadow;
        position: absolute;
        border-radius: 15px;
        width: 180px;
        top: 2rem;
        left: -1rem;
        overflow: hidden;
        background: $white;
        z-index: 12;
        animation: accordion-expand-dropdown 0.4s forwards;
        padding-top: 1rem;
        &.open {
          animation: accordion-collapse-dropdown 0.7s forwards;
        }
        span {
          transition: 0.5s;
          &:hover {
            color: $orange-red;
            transition: 0.5s;
          }
        }
      }
    }
  }
  .content {
    @include dflex($justify: normal, $align: normal, $gap: 2.8rem 1.5rem);
    flex-wrap: wrap;
    min-height: 100vh;
    padding: 10px 0 2rem 5rem;
    .item {
      width: 47%;
      height: 350px;
      cursor: pointer;
    }
  }
}
</style>
