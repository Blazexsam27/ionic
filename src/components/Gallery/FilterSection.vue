<template>
  <div class="filter_section">
    <div class="layouts_container">
      <div class="upper" @click="this.showLayouts = !this.showLayouts">
        <span>Layout</span>
        <v-icon v-if="this.showLayouts" name="md-keyboardarrowdown-sharp" />
        <v-icon v-else name="md-keyboardarrowup-sharp" />
      </div>
      <div class="list" :class="{ open: this.showLayouts }">
        <span @click="websiteCategoryBasedFilter('dashboard')">Dashboard</span>
        <span @click="websiteCategoryBasedFilter('landingPage')"
          >Landing Page</span
        >
        <span @click="websiteCategoryBasedFilter('portfolio')">Portfolio</span>
      </div>
    </div>

    <div class="frameworks_container">
      <div class="upper" @click="this.showFrameworks = !this.showFrameworks">
        <span>Framework</span>
        <v-icon v-if="this.showFrameworks" name="md-keyboardarrowdown-sharp" />
        <v-icon v-else name="md-keyboardarrowup-sharp" />
      </div>
      <div class="list" :class="{ open: this.showFrameworks }">
        <span
          @click="frameworkBasedFilter(item)"
          v-for="item of this.frameworks"
          :key="item"
          >{{ item }}</span
        >
      </div>
    </div>

    <div class="design_systems_container">
      <div
        class="upper"
        @click="this.showDesignSystems = !this.showDesignSystems"
      >
        <span>Design System</span>
        <v-icon
          v-if="this.showDesignSystems"
          name="md-keyboardarrowdown-sharp"
        />
        <v-icon v-else name="md-keyboardarrowup-sharp" />
      </div>
      <div class="list" :class="{ open: this.showDesignSystems }">
        <span
          @click="this.designSystemFilter(item)"
          v-for="item of this.design_systems"
          :key="item"
          >{{ item }}</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FilterSection",
  data() {
    return {
      frameworks: [
        "React",
        "Vue",
        "Angular",
        "TailwindCSS",
        "Bootstrap",
        "Material UI",
      ],
      design_systems: ["Material", "Dark", "Soft", "Light", "Modern", "Argon"],
      showLayouts: false,
      showFrameworks: false,
      showDesignSystems: false,

      filteredCards: [],
    };
  },
  methods: {
    websiteCategoryBasedFilter(filterValue) {
      try {
        this.$store.dispatch(
          "home/setCardsByWebsiteCategoryFilter",
          filterValue
        );
      } catch (error) {
        console.error("Error while filtering cards", error);
      }
    },

    frameworkBasedFilter(filterValue) {
      try {
        this.$store.dispatch("home/setCardsByFrameworkFilter", filterValue);
      } catch (error) {
        console.error("Error while filtering cards", error);
      }
    },

    designSystemFilter(filterValue) {
      try {
        this.$store.dispatch("home/setCardsByDesignSystemFilter", filterValue);
      } catch (error) {
        console.error("Error while filtering cards", error);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.filter_section {
  @include dflex($justify: normal, $flex: column);
  width: 100%;
  height: fit-content;

  .upper {
    text-transform: uppercase;
    color: $text-black-08;
    font-size: 15px;
    font-weight: 600;
  }
  .layouts_container,
  .frameworks_container,
  .design_systems_container {
    @include dflex(
      $justify: normal,
      $align: start,
      $flex: column,
      $gap: 0.8rem
    );
    text-align: start;
    width: 100%;

    .upper {
      @include dflex($justify: space-between, $align: center);
      width: 100%;
      cursor: pointer;

      svg {
        width: 25px;
        height: 25px;
      }

      &:hover {
        transition: 0.5s;
        color: $orange-red;
      }
    }
    .list {
      @include dflex(
        $justify: normal,
        $align: start,
        $flex: column,
        $gap: 0.8rem
      );
      font-size: 14px;
      color: $text-black-08;
      overflow: hidden;
      width: 100%;

      span {
        cursor: pointer;

        &:hover {
          color: $purple;
        }
      }
    }
  }

  .layouts_container {
    @include accordion_animation(0px, 90px, layouts);
    .list {
      animation: accordion-expand-layouts 0.5s forwards;

      &.open {
        animation: accordion-collapse-layouts 0.5s forwards;
      }
    }
  }

  .frameworks_container {
    @include accordion_animation(0px, 190px, framework);
    .list {
      animation: accordion-expand-framework 0.5s forwards;

      &.open {
        animation: accordion-collapse-framework 0.5s forwards;
      }
    }
  }

  .design_systems_container {
    @include accordion_animation(0px, 190px, design_systems);
    .list {
      animation: accordion-collapse-design_systems 0.5s forwards;

      &.open {
        animation: accordion-expand-design_systems 0.5s forwards;
      }
    }
  }
}
</style>
