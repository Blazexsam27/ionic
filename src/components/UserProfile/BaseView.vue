<template lang="">
  <div class="base_view_container">
    <div class="user_profile">
      <div class="left">
        <div class="profile_pic">
          <img :src="this.bundle_ad_bg" alt="user profile pic" />
        </div>
        <div class="name">User Name</div>
        <div class="email">myemail@gmail.com</div>

        <div class="btn_group">
          <div
            class="catalog"
            :class="{ active: this.selectedContent === 'catalog' }"
            @click="this.handleContentChange('catalog')"
          >
            Catalog
          </div>
          <div
            class="wishlist"
            :class="{ active: this.selectedContent === 'wishlist' }"
            @click="this.handleContentChange('wishlist')"
          >
            Wishlist
          </div>

          <div
            class="profile_info"
            :class="{ active: this.selectedContent === 'information' }"
            @click="this.handleContentChange('information')"
          >
            Information
          </div>
        </div>
      </div>
      <div class="v_line"></div>
      <div class="right">
        <component :is="this.content" :listingType="this.listingType" />
      </div>
    </div>
  </div>
</template>
<script>
import bundle_ad_bg from "../../assets/images/bundle_ad_bg.jpg";
import UserCatalog from "./UserCatalog.vue";
export default {
  data() {
    return {
      bundle_ad_bg,
      selectedContent: "catalog",
      content: UserCatalog,
      listingType: "Wishlist",
    };
  },
  methods: {
    handleContentChange(value) {
      switch (value) {
        case "catalog":
          this.selectedContent = "catalog";
          this.listingType = "Catalog";
          break;
        case "wishlist":
          this.selectedContent = "wishlist";
          this.listingType = "Wishlist";
          break;

        case "information":
          this.selectedContent = "information";
          break;

        default:
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.base_view_container {
  @include dflex($justify: normal, $flex: column);
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  position: absolute;
  top: calc(625px - 15rem);
  z-index: 10;
  .user_profile {
    @include dflex($justify: normal, $align: normal, $gap: 0);
    @include boxshadow;
    background: $text-color-white;
    width: 85%;
    min-height: 100vh;
    height: 100vh;
    border-radius: 15px;
    .left {
      @include dflex($justify: normal, $flex: column);
      width: 20%;
      font-family: $font1;
      padding: 1.5rem 0;
      .profile_pic {
        width: 220px;
        height: 220px;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          border-radius: inherit;
        }
      }

      .name {
        @include header($fsize: 1.5rem, $shadow: none);
      }
      .email {
        @include subheader($fsize: 0.8rem, $shadow: none);
      }

      .btn_group {
        @include dflex($flex: column);
        margin-top: 4rem;
        font-size: 1.1rem;
        .catalog,
        .wishlist,
        .profile_info {
          @include dflex;
          cursor: pointer;
          height: 40px;
          width: 230px;
          clip-path: polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%);
          border-radius: 10px;
          transition: 0.7s;
        }
        .active {
          transition: 0.7s;
          background-color: $orange-red;
          color: $text-color-white;
        }
      }
    }

    .v_line {
      display: flex;
      align-self: center;
      width: 0px;
      height: 90%;
      opacity: 0.5;
      border: 1.2px solid $text-black-05;
    }
    .right {
      width: 78%;
      height: 100%;
    }
  }
}
</style>
