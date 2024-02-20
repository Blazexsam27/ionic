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
      <div class="item">
        <DesignCard
          title="Sample Design"
          subTitle="Fullstack responsive design"
          price="59"
          :click="() => this.navigateToDetailsPage('10')"
        />
      </div>

      <div class="item">
        <DesignCard
          title="Sample Design"
          subTitle="Fullstack responsive design"
          price="59"
          :click="() => this.navigateToDetailsPage('11')"
        />
      </div>

      <div class="item">
        <DesignCard
          title="Sample Design"
          subTitle="Fullstack responsive design"
          price="59"
          :click="() => this.navigateToDetailsPage('12')"
        />
      </div>

      <div class="item">
        <DesignCard
          title="Sample Design"
          subTitle="Fullstack responsive design"
          price="59"
          :click="() => this.navigateToDetailsPage('13')"
        />
      </div>
    </div>
  </div>
</template>
<script>
import DesignCard from "../Widgets/DesignCard.vue";
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
  methods: {
    navigateToDetailsPage(id) {
      const type = this.$route.params.type;
      // const id = this.$route.params.id;

      console.log("Type", type, "Id", id);
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
    @include dflex($justify: normal, $align: normal);
    flex-wrap: wrap;
    min-height: 100vh;
    padding: 10px 0 2rem 5rem;
    .item {
      width: 49%;
      height: 350px;
    }
  }
}
</style>
