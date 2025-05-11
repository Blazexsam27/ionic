<!-- This component will be available to every page, it has navbar and resizeable height -->

<template>
  <div class="intro-section-component">
    <nav class="navbar">
      <router-link to="/" class="logo">
        <div class="left">IONIC</div>
      </router-link>
      <div class="right">
        <ul>
          <li>
            <v-icon name="la-cubes-solid" />
            <span>Technology</span>
          </li>
          <li>
            <v-icon name="si-antdesign" />
            <span>Designs</span>
          </li>
          <li>
            <v-icon name="oi-gift" />
            <span>Bundles</span>
          </li>
          <li>
            <v-icon name="fa-laptop-code" />
            <span>Resources</span>
          </li>
          <li>
            <v-icon name="ri-article-line" />
            <span>Blogs</span>
          </li>

          <li v-if="!userAuthenticated" @click="initiateAuth">
            <v-icon name="fa-user-circle" />
            <span>Login/Signup</span>
          </li>

          <!-- If user is authenticated -->
          <li
            class="user_auth"
            v-if="userAuthenticated"
            @click="this.toggleDropdown"
          >
            <img
              v-if="userProfile.photoURL"
              :src="userProfile.photoURL"
              alt="User"
              class="user_profile_pic"
            />
            <v-icon v-else name="fa-user-circle" />
            <span>{{ userProfile.displayName || "Profile" }}</span>

            <div class="dropdown" :class="{ open: !this.showDropdown }">
              <router-link to="/user_profile/1/profile">
                <span class="profile">Profile</span>
              </router-link>
              <router-link to="/user_profile/1/catalog">
                <span class="catalog">Catalog</span>
              </router-link>
              <router-link to="/user_profile/1/wishlist">
                <span class="wishlist">Wishlist</span>
              </router-link>
              <span class="logout" @click="this.logout">Logout</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <component v-if="this.content" :is="this.content" />
    <NavbarDefaultContent
      @scrollToLatestReleases="scrollToSection('latestReleases')"
      v-else
    />
  </div>
</template>
<script>
import NavbarDefaultContent from "./NavbarDefaultContent.vue";
import authService from "../../services/auth/auth.service";
import userService from "../../services/user/user.service";
import cookiesUtils from "../../utils/CookiesUtils";
import localStorageUtils from "../../utils/LocalStorageUtils";
import { mapState, mapGetters } from "vuex";
export default {
  name: "IntroSectionComponent",
  props: {
    content: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      userAuthenticated: false,
      userProfile: {
        email: "",
        displayName: "",
        photoUrl: "",
      },
      showDropdown: false,
    };
  },
  computed: {
    ...mapState("home", ["loading", "error"]),
    ...mapGetters("home", ["homePageCards"]),
  },
  components: {
    NavbarDefaultContent,
  },
  methods: {
    async initiateAuth() {
      document.addEventListener("click", this.closeDropdownOnClickOutside);
      try {
        const response = await authService.signInUser();
        const expiry = 7 * 24 * 60 * 60 * 1000;
        // securely save token into cookies.
        cookiesUtils.saveToCookies("accessToken", response.accessToken, expiry);
        // save additional information into local storage
        const { email, displayName, photoURL } = response;
        const userData = {
          email,
          displayName,
          photoURL,
        };
        // if the user is registered then create a document in user collection in firebase
        await userService.createUser(userData);
        localStorageUtils.setDataWithExpiry("user", userData, expiry);

        window.location.reload();
      } catch (error) {
        console.error("Error while register/login", error);
      }
    },
    checkAuthentication() {
      const authToken = cookiesUtils.getFromCookies("accessToken");
      const userData = localStorageUtils.getDataWithExpiry("user");
      if (authToken && userData) {
        this.userAuthenticated = true;
        this.userProfile = userData;
      }
    },

    logout() {
      authService.logout();
      window.location.reload();
    },

    // ui related functions
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },

    closeDropdownOnClickOutside(event) {
      const dropdown = this.$refs.dropdown;
      if (dropdown && !dropdown.contains(event.target)) {
        this.showDropdown = false;
      }
    },

    // setup up the store with required homepage cards
  },
  async created() {
    this.checkAuthentication();
    this.$store.dispatch("home/setHomePageCards");
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeDropdownOnClickOutside);
  },
};
</script>
<style lang="scss" scoped>
.intro-section-component {
  // height: fit-content;
  background: $blue-purple-grad;
  height: 650px;
  width: 100%;

  nav {
    @include dflex(space-between, normal);
    width: 100%;
    height: fit-content;
    padding: 0 3rem;
    color: $text-color-white;

    .logo {
      color: $text-color-white;
      padding-top: 10px;
    }
    .left {
      font-size: 2.5rem;
      font-weight: bold;
    }

    .right {
      padding: 0 5rem;
      font-weight: 600;
      letter-spacing: 1.3px;

      ul {
        display: flex;
        gap: 2rem;

        li {
          @include dflex($flex: column);
          list-style: none;
          cursor: pointer;
          transition: 0.5s;
          align-items: center;

          svg {
            width: 30px;
            height: 30px;
          }

          &:hover {
            transition: 0.5s;
            text-decoration: underline;
            text-underline-offset: 4px;
            color: $orange-red;
          }

          .user_profile_pic {
            width: 30px;
            height: auto;
            border-radius: 50%;
          }
        }

        .user_auth {
          position: relative;

          @include accordion_animation(0px, 165px, nav_dropdown);
          .dropdown {
            animation: accordion-expand-nav_dropdown 0.5s forwards;
            &.open {
              animation: accordion-collapse-nav_dropdown 0.5s forwards;
            }
          }
          .dropdown {
            @include dflex($justify: start, $flex: column);
            @include boxshadow;
            position: absolute;
            padding: 10px 20px;
            background-color: $white;
            top: 5rem;
            width: 120px;
            height: 165px;
            border-radius: 7px;
            color: $orange-red;
            overflow: hidden;
            a {
              color: $orange-red;
            }
            span {
              transition: 0.4s;
              &:hover {
                transition: 0.4s;
                color: $text-black;
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
}
</style>
