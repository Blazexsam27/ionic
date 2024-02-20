<template>
  <div class="base_view_container">
    <div class="user_profile">
      <div class="left">
        <div class="profile_pic">
          <img :src="this.userData.profilePic" alt="user profile pic" />
        </div>
        <div class="name">{{ this.userData.displayName }}</div>
        <div class="email">{{ this.userData.email }}</div>

        <div class="btn_group">
          <div
            class="profile_info"
            :class="{ active: this.selectedContent === 'profile' }"
            @click="
              () => this.handleRouteChange('/user_profile/1/profile', 'profile')
            "
          >
            Profile
          </div>

          <div
            class="catalog"
            :class="{ active: this.selectedContent === 'catalog' }"
            @click="
              () => this.handleRouteChange('/user_profile/1/catalog', 'catalog')
            "
          >
            Catalog
          </div>

          <div
            class="wishlist"
            :class="{ active: this.selectedContent === 'wishlist' }"
            @click="
              () =>
                this.handleRouteChange('/user_profile/1/wishlist', 'wishlist')
            "
          >
            Wishlist
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
import ProfileInfo from "./ProfileInfo.vue";
import UserWishlist from "./UserWishlist.vue";
import localStorageUtils from "@/utils/LocalStorageUtils";

export default {
  data() {
    return {
      bundle_ad_bg,
      selectedContent: "catalog",
      content: UserCatalog,
      listingType: "Information",
      userData: {
        profilePic: "#",
        displayName: "",
        email: "",
      },
    };
  },
  watch: {
    $route(to, from) {
      this.handleContentRender();
    },
  },
  methods: {
    handleContentRender() {
      console.log("clla", this.$route.name);
      switch (this.$route.name) {
        case "Profile":
          this.content = ProfileInfo;
          this.selectedContent = "profile";
          break;
        case "Catalog":
          this.content = UserCatalog;
          this.selectedContent = "catalog";
          break;
        case "Wishlist":
          this.content = UserWishlist;
          this.selectedContent = "wishlist";
          break;
      }
    },
    // called when (catalog, wishlist, information) is clicked to change the button active state and redirect to new route
    handleRouteChange(path, selected) {
      console.log("called");
      this.selectedContent = selected;
      this.$router.push({ path });
    },

    // function to get basic information about the user
    handleInitialDataPopulate() {
      const user = localStorageUtils.getDataWithExpiry("user");
      if (user) {
        this.userData = {
          displayName: user.displayName,
          email: user.email,
          profilePic: user.photoURL,
        };
      }
    },
  },
  created() {
    // render the right side content according to route
    this.handleContentRender();
    // populate intial data
    this.handleInitialDataPopulate();
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
