<template>
  <div class="latest_releases_container">
    <div class="header">Latest Release</div>
    <div class="latest_releases">
      <div class="left">
        <img
          :src="this.latest_release_bg"
          alt="react_vue_angular_dashboard_designs"
        />
        <div class="tint"></div>

        <div class="content">
          <v-icon name="hi-view-grid-add" />
          <div class="content_header">
            Browse the latest release for this month
          </div>
          <div class="subheader">
            The best and most popular themes are here!
          </div>
          <div class="browse_button_container">
            <CurveButton text="Browse More" />
          </div>
        </div>
      </div>
      <div class="right">
        <div class="upper_row">
          <div v-for="item of homePageCards.slice(0, 2)">
            <DesignCard
              :title="item.fileData.fileName"
              subTitle="Premium 5 dashboard templates"
              :price="item.fileData.price"
              :img="item.filesUrl?.thumbnailUrls[0]"
            />
          </div>
        </div>
        <div class="lower_row">
          <div v-for="item of homePageCards.slice(2, 4)">
            <DesignCard
              :title="item.fileData.fileName"
              subTitle="Premium 5 dashboard templates"
              :price="item.fileData.price"
              :img="item.filesUrl?.thumbnailUrls[0]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DesignCard from "../Widgets/DesignCard.vue";
import latest_release_bg from "../../assets/images/latest_release_bg.jpg";
import CurveButton from "../Widgets/CurveButton.vue";
import catalogService from "@/services/Catalog/catalog.service";
import { mapGetters, mapState } from "vuex";
export default {
  name: "LatestReleases",
  components: {
    DesignCard,
    CurveButton,
  },
  data() {
    return {
      latest_release_bg,
    };
  },
  computed: {
    ...mapState("home", ["loading", "error"]),
    ...mapGetters("home", ["homePageCards"]),
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.latest_releases_container {
  @include dflex($justify: normal, $align: center, $flex: column);
  width: 100%;
  height: fit-content;
  min-height: 60vh;
  margin-top: 2.5rem;

  margin-bottom: 5rem;
  .header {
    @include header($fsize: 2rem, $color: $text-black-08, $shadow: none);
    width: 75%;
    @include dflex($justify: start, $align: normal);
  }
  .latest_releases {
    @include dflex(normal, normal, $gap: 3rem);
    width: 75%;
    height: 100%;

    .left {
      @include dflex($align: center);
      width: 30%;
      height: 40rem;
      color: $text-color-white;
      border-radius: 10px;
      position: relative;
      padding: 0 1rem;
      img {
        position: absolute;
        z-index: 3;
        width: 100%;
        height: 100%;
        border-radius: inherit;
      }
      .tint {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 4;
        background: $orange-red-08;
        border-radius: inherit;
      }

      .content {
        @include dflex($align: start, $flex: column);
        position: relative;
        z-index: 15;
        svg {
          width: 35px;
          height: 35px;

          background: $white;
          border-radius: 50%;
          border: 10px solid $white;
          fill: $orange-red;
          color: $orange-red;
        }
        .content_header {
          @include header($fsize: 1.5rem, $color: $white);
        }
        .subheader {
          @include subheader($fsize: 1rem, $color: $white);
          width: 90%;
        }
      }
    }

    .right {
      @include dflex($flex: column, $gap: 2.5rem);
      width: 65%;
      height: 40rem;
      .upper_row,
      .lower_row {
        @include dflex($gap: 2rem);
        width: 100%;
        height: 50%;
        div {
          @include dflex($justify: normal, $align: normal, $flex: column);
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
