<template>
  <div class="bundle_container">
    <div class="bundle_card">
      <img
        :src="bgImg"
        alt="react, vue, angular, tailwind css free, popular designs"
        class="bg_img"
      />
      <div class="tint" :style="{ background: bgColor }"></div>
      <v-icon class="card_icon" :name="this.icon" />
      <div class="title">{{ this.title }}</div>
      <div class="subtitle">{{ this.subtitle }}</div>
      <div class="briefs">
        <div class="data" v-for="item of this.briefData">
          <CardBriefStat
            :text="item.text"
            :value="item.value"
            :icon="item.icon"
          />
        </div>
      </div>
    </div>
    <div class="prices">
      <div class="upper">
        <span class="title">{{ title }}</span>
        <span
          ><span class="sp">$100</span><span class="discounted_sp"> $29</span>
        </span>
      </div>
      <div class="lower">6 premium products</div>
    </div>
  </div>
</template>
<script>
import CardBriefStat from "./CardBriefStat.vue";
export default {
  name: "BundleCard",
  components: {
    CardBriefStat,
    CardBriefStat,
  },

  props: {
    title: String,
    subtitle: String,
    icon: String,
    bgColor: String,
    bgImg: String,
    briefData: {
      type: Array,
      default: [{ icon: "", value: "", text: "" }],
    },
  },
};
</script>
<style lang="scss" scoped>
.bundle_container {
  // @include dflex($justify: normal, $align: normal, $flex: column);
  width: 370px;
  height: 280px;
  .bundle_card {
    @include dflex($justify: normal, $align: center, $flex: column);
    @include boxshadowBottom;
    border-radius: 12px;
    color: $text-color-white;
    width: -webkit-fill-available;
    height: 100%;
    padding: 1rem;
    position: relative;

    .bg_img {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
      border-radius: inherit;
      top: 0;
    }
    .tint {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 3;
      opacity: 0.7;
      top: 0;
      border-radius: inherit;
    }

    svg {
      font-size: 1.2em;
      border: 7px solid white;
      fill: white;
      background: white;
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }
    .card_icon {
      width: 35px;
      height: 35px;
      color: $text-color-white;
      z-index: 10;
    }
    .title {
      width: 65%;
      text-align: center;
      z-index: 10;
      @include subheader(
        $fsize: 1.1rem,
        $color: $text-color-white,
        $shadow: none
      );
    }
    .subtitle {
      width: 70%;
      text-align: center;
      z-index: 10;
      @include subheader(
        $fsize: 0.8rem,
        $color: $text-color-white,
        $shadow: none
      );
    }

    .briefs {
      @include dflex;
      z-index: 10;
    }
  }

  .prices {
    margin: 1rem 5px;
    .upper {
      @include dflex($justify: space-between, $align: normal);

      .title {
        @include subheader($fsize: 1.1rem, $shadow: none);
      }
      .sp {
        text-decoration: line-through;
        color: $orange-red;
      }
      .discounted_sp {
        font-weight: 600;
        padding-left: 3px;
      }
    }
    .lower {
      @include dflex($justify: start, $align: normal);
      color: $text-black-08;
      font-size: 14px;
    }
  }
}
</style>
