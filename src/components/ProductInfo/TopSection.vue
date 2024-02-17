<template>
  <div class="top_section_container">
    <div class="left">
      <img :src="this.test_card_img" alt="Bootstrap, React.js, Vue.js, Free" />

      <div class="btns"></div>
    </div>
    <div class="right">
      <div class="header">Bootstrap Material Design V2</div>
      <div class="subheader">
        An authentic and elegant simple design template
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
          <CurveButton text="Buy Now · $49.99" />
        </div>
        <div class="free_demo_template">
          <BorderButton text="Free Demo Template" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import test_card_img from "../../assets/images/test_card_img.jpg";
import CurveButton from "../Widgets/CurveButton.vue";
import BorderButton from "../Widgets/BorderButton.vue";
export default {
  name: "TopSection",
  data() {
    return {
      test_card_img,
    };
  },
  components: {
    CurveButton,
    BorderButton,
  },
};
</script>
<style lang="scss" scoped>
.top_section_container {
  @include dflex($gap: 5rem);
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
}
</style>
