<template>
  <div class="top_section_container" v-if="!loading && productData">
    <div class="left">
      <img
        :src="productData.filesUrl.thumbnailUrls[0]"
        alt="Bootstrap, React.js, Vue.js, Free"
      />

      <div class="btns"></div>
    </div>
    <div class="right">
      <div class="header">{{ productData.fileData.fileName }}</div>
      <div class="subheader">
        {{ productData.fileData.fileDescription }}
      </div>
      <div class="ratings_reviews">
        <span class="stars">
          <v-icon name="bi-star-fill" />
          <v-icon name="bi-star-fill" />
          <v-icon name="bi-star-fill" />
          <v-icon name="bi-star-fill" />
          <v-icon name="bi-star-fill" />
        </span>
        <span class="ratings">4.9/5</span>
        <span class="reviews">(555 Reviews)</span>
      </div>
      <div class="license">
        <v-icon name="md-locallibrary-outlined" />
        <span>License (EULA)</span>
      </div>
      <hr class="v_line" />
      <div class="btns">
        <div class="buy_now">
          <CurveButton :text="`Buy Now · $${productData.fileData.price}`" />
        </div>
        <div class="free_demo_template">
          <BorderButton text="Free Demo Template" />
        </div>
      </div>
    </div>
  </div>

  <div class="_loader" v-else-if="!loading">
    <PulseLoader color="white" />
  </div>
</template>
<script>
import test_card_img from "../../assets/images/test_card_img.jpg";
import CurveButton from "../Widgets/CurveButton.vue";
import BorderButton from "../Widgets/BorderButton.vue";
import { mapGetters, mapState } from "vuex";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "TopSection",
  props: {
    img: {
      type: String,
      default: "#",
    },
    title: {
      type: String,
      default: "#",
    },
    description: {
      type: String,
      default: "#",
    },
  },
  data() {
    return {
      test_card_img,
    };
  },
  computed: {
    ...mapGetters("home", ["loading", "error"]),
    ...mapState("home", ["homePageCards"]),

    productData() {
      this.id = this.$route.params.id;
      const data = this.homePageCards.filter((item) => item.uuid === this.id);
      return data[0];
    },
  },

  components: {
    CurveButton,
    BorderButton,
    PulseLoader,
  },
};
</script>
<style lang="scss" scoped>
.top_section_container {
  @include dflex($gap: 5rem);
  margin-top: 4rem;
  .left {
    @include dflex($justify: center, $align: end, $flex: column);
    width: 50%;
    height: fit-content;
    img {
      width: 75%;
      height: auto;
      border-radius: 25px;
    }
  }

  .right {
    @include dflex($justify: center, $align: center, $flex: column);
    width: 50%;
    height: fit-content;
    color: $text-color-white;
    .header {
      @include header(
        $fsize: 2rem,
        $color: $text-color-white,
        $shadow: none,
        $transform: capitalize
      );
    }
    .subheader {
      @include subheader(
        $fsize: 0.8rem,
        $color: $text-color-white,
        $shadow: none,
        $transform: uppercase
      );
      width: 30rem;
      text-align: center;
    }
    .ratings_reviews {
      @include dflex($gap: 0.2rem);
      margin-top: 2rem;
      .stars {
        svg {
          width: 35px;
          height: 35px;
        }
      }
    }
    .license {
      transition: 0.4s;
      cursor: pointer;
      svg {
        width: 30px;
        height: 30px;
        opacity: 0.8;
        color: $text-color-white;
        transition: 0.4s;
      }
      &:hover {
        transition: 0.4s;
        color: $orange-red;
        svg {
          transition: 0.4s;
          color: $orange-red;
        }
      }
    }

    .v_line {
      width: 70%;
      opacity: 0.3;
    }
    .btns {
      @include dflex($gap: 3rem);
    }
  }

  ._loader {
    position: fixed;
    top: 50%;
    left: 50%;
  }
}
</style>
