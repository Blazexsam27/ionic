<template>
  <div class="content">
    <div class="content_left">
      <div class="headline">
        Optimized Designs at Your Fingertips: Fully Coded and Customizable Web
        Frontends
      </div>
      <div class="subhead_line">
        Dashboards, Landing pages, Portfolio templates, Component gallery, built
        on top of Scss, Tailwind css, Bootstrap, React.js, Vue.js, Angular,
        Node.js
      </div>
      <div class="latest-release" @click="scrollToLatestReleases">
        Checkout latest release
        <v-icon name="md-keyboarddoublearrowright-round" />
      </div>
    </div>
    <div class="content_right">
      <div class="inner-orbit">
        <v-icon id="react" name="vi-file-type-reactjs" />
        <v-icon id="vue" name="vi-file-type-vue" />
      </div>

      <div class="middle-orbit">
        <v-icon id="node" name="vi-file-type-node2" />
        <v-icon
          id="bootstrap"
          name="fa-bootstrap"
          :style="{ color: '#4834d4' }"
        />
      </div>

      <div class="outer-orbit">
        <v-icon id="angular" name="vi-file-type-angular" />
        <v-icon id="tails" name="vi-file-type-tailwind" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavbarDefaultContent",
  methods: {
    scrollToLatestReleases() {
      this.$emit("scrollToLatestReleases");
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  display: flex;
  align-items: center;

  margin-top: 5rem;

  svg {
    width: 55px;
    height: 55px;
  }

  .content_left {
    width: 50%;
    height: fit-content;
    @include dflex($flex: column);
    gap: 1.5rem;
    padding: 1rem 2.5rem;

    .headline {
      color: hsla(176, 100%, 58%, 0.6);
      font-size: 2.5rem;
      background: $orange-red-grad;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 600;
    }

    .subhead_line {
      font-size: 1rem;
      color: $white-08;
      letter-spacing: 1.2px;
      line-height: 1.5rem;

      text-shadow: 0px 0px 1px rgb(255, 255, 255);
    }

    .latest-release {
      @include dflex(normal, center);

      border-radius: 15px;
      height: fit-content;
      width: 250px;
      padding: 1px 8px;

      cursor: pointer;
      color: $white;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(1px);
      -webkit-backdrop-filter: blur(1px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);

      svg {
        width: 25px;
        height: 25px;
        transition: 0.5s;
      }

      transition: 0.5s;

      &:hover {
        transition: 0.5s;
        background: $orange-red-05;

        svg {
          transition: 0.5s;
          padding-left: 10px;
        }
      }
    }
  }

  .content_right {
    @include dflex(center, normal);
    width: 50%;
    height: fit-content;
    position: relative;

    .inner-orbit,
    .outer-orbit,
    .middle-orbit {
      width: 150px;
      aspect-ratio: 1/1;
      border-radius: 50%;
      margin-top: 5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transform-origin: center;
      position: absolute;
      animation: orbit 15s linear infinite;
    }

    #react,
    #vue,
    #angular,
    #tails,
    #node,
    #bootstrap {
      position: relative;
      background: $text-color-white;
      border-radius: 50%;
    }

    #react,
    #angular,
    #node {
      left: -1.5rem;
    }

    #vue,
    #tails,
    #bootstrap {
      left: 1.5rem;
    }

    #vue {
      border-top: 5px solid $text-color-white;
      border-left: 0.5px solid $text-color-white;
      border-right: 0.5px solid $text-color-white;
      width: 52px;
      height: 50px;
    }

    .inner-orbit {
      border: 0.6px solid rgba(255, 255, 255, 0.1);
      top: -8.3rem;
    }

    .middle-orbit {
      width: 275px;
      border: 0.6px solid rgba(255, 255, 255, 0.1);
      top: -12rem;
      animation: orbit 20s linear infinite;
    }

    .outer-orbit {
      width: 400px;
      border: 0.6px solid rgba(255, 255, 255, 0.1);
      top: -16rem;
      animation: orbit 30s linear infinite;
    }
  }
}

@keyframes orbit {
  100% {
    transform: rotate(360deg);
  }
}
</style>
