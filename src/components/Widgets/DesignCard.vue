<template>
  <div class="design_card_container">
    <div class="design_card">
      <div class="star_downloads">
        <div class="indicators">
          <v-icon class="icon" name="bi-star-fill" />
          <span class="quantity">4.8/5</span>
        </div>
        <div class="indicators">
          <v-icon class="icon" name="md-downloading" />
          <span class="quantity">4899</span>
        </div>
      </div>

      <!-- bg img -->
      <img :src="this.img" alt="latest_release_react_vue_angular_designs" />
    </div>
    <div class="card-info">
      <div class="upper">
        <span>{{ this.title }}</span>
        <span>{{ this.price }}</span>
      </div>
      <div class="lower">{{ this.subTitle }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DesignCard",
  props: {
    title: {
      default: "Title",
      type: String,
    },
    price: {
      default: "$100",
      type: String,
    },
    subTitle: {
      default: "Sub Title",
      type: String,
    },
    img: {
      default: "#",
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.design_card_container {
  width: 100%;
  height: 100%;
  .design_card {
    @include boxshadowBottom;
    width: 100%;
    height: 85%;

    border-radius: 10px;
    position: relative;
    z-index: 3;
    background: $blue-08;

    .star_downloads {
      @include dflex;
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 10;
      color: $text-color-white;
      .indicators {
        font-size: 14px;
        font-weight: 600;
        .icon {
          width: 25px;
          height: 25px;
        }
      }
    }

    .img {
      width: 100%;
      height: 100%;
    }
  }
  .card-info {
    width: 100%;
    height: 10%;
    padding-top: 10px;
    .upper {
      @include dflex($justify: space-between, $align: normal);
      padding: 2px 10px;
    }
    .lower {
      color: $text-black-08;
      font-size: 14px;
      padding: 2px 10px;
    }
  }
}
</style>
