<template>
  <div class="blog_ad_container">
    <div class="blog_ad">
      <div class="left">
        <div class="header">
          Learn Fundatmentals of Creating Elegant Frontend UI/UX
        </div>
        <div class="subheader">by Ionic Designs</div>
        <hr class="divider" />
        <div class="desc">
          Dive into the art of frontend mastery with our blog! From beginner
          basics to advanced techniques, explore curated tutorials on React,
          Vue, Angular, Tailwind, and more. Elevate your UI design skills and
          stay ahead in the ever-evolving world of web development. Start
          learning now!
        </div>
        <div class="view_blogs_btn">
          <CurveButton text="Start Learning" customClass="small_button" />
        </div>
      </div>
      <div class="right">
        <div class="ocean">
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tech_wires from "../../assets/images/tech_wires.png";
import CurveButton from "../Widgets/CurveButton.vue";
export default {
  name: "BlogAd",
  components: {
    CurveButton,
  },
  data() {
    return {
      tech_wires,
    };
  },
};
</script>
<style lang="scss" scoped>
.blog_ad_container {
  @include dflex($align: normal);
  width: 100%;
  height: 70vh;
  margin-top: 4rem;
  .blog_ad {
    @include dflex($justify: space-between, $align: normal);
    @include boxshadowBottom;
    width: 75%;
    height: 65%;
    background: $blue-grad;
    border-radius: 10px;
    padding: 3rem;
    position: relative;
    overflow: hidden;
    .left {
      width: 65%;
      position: relative;
      z-index: 10;
      .header {
        @include header(
          $fsize: 1.7rem,
          $shadow: none,
          $color: $text-color-white
        );
        width: 75%;
      }
      .subheader {
        @include subheader(
          $fsize: 0.75rem,
          $shadow: none,
          $color: $text-color-white
        );
        width: 75%;
        padding-top: 10px;
      }
      .desc {
        @include subheader(
          $fsize: 1rem,
          $shadow: none,
          $color: $text-color-white
        );
        line-height: 1.4rem;
        font-weight: 500;
        width: 75%;
      }
      .view_blogs_btn {
        margin-top: 1.5rem;
      }
    }
    .divider {
      border: 0;
      height: 1px;
      background: $lavendar-grad;
      margin: 1.5rem 0;
      width: 75%;
    }
    .right {
      width: 35%;

      .ocean {
        height: 5%;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #015871;
        filter: saturate(3.5) brightness(0.2);
        z-index: 1;
      }

      .wave {
        background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg)
          repeat-x;
        position: absolute;
        top: -198px;
        width: 6400px;
        height: 198px;
        animation: wave 15s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
        transform: translate3d(0, 0, 0);
        filter: saturate(3.5) hue-rotate(100deg);
        z-index: 1;
      }

      .wave:nth-of-type(2) {
        top: -175px;
        animation: wave 20s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
          swell 7s ease -1.25s infinite;
        opacity: 1;
        filter: saturate(2.5) hue-rotate(60deg);
        z-index: 1;
      }

      @keyframes wave {
        0% {
          margin-left: 0;
        }
        100% {
          margin-left: -1600px;
        }
      }

      @keyframes swell {
        0%,
        100% {
          transform: translate3d(0, -5px, 0);
        }
        50% {
          transform: translate3d(0, 5px, 0);
        }
      }
    }
  }
}
</style>
