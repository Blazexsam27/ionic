<template>
  <div class="popular_free_products_container">
    <div class="header">Most Popular Free Products</div>
    <div class="popular_free_products">
      <div class="left" id="free_prods">
        <div class="upper">
          <div>
            <DesignCard
              title="Material Dashboard Design"
              subTitle="Premium 5 dashboard templates"
              price="$29"
            />
          </div>
          <div>
            <DesignCard />
          </div>
        </div>
        <div class="lower">
          <div>
            <DesignCard />
          </div>
          <div>
            <DesignCard />
          </div>
        </div>
      </div>
      <div class="right">
        <div class="bar_line" id="bar_line">
          <svg
            id="wave"
            viewBox="0 0 1440 340"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop>
                <stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              style="transform: translate(0, 0px); opacity: 1"
              fill="url(#sw-gradient-0)"
              d="M0,272L30,260.7C60,249,120,227,180,232.3C240,238,300,272,360,243.7C420,215,480,125,540,73.7C600,23,660,11,720,22.7C780,34,840,68,900,90.7C960,113,1020,125,1080,107.7C1140,91,1200,45,1260,34C1320,23,1380,45,1440,45.3C1500,45,1560,23,1620,22.7C1680,23,1740,45,1800,51C1860,57,1920,45,1980,45.3C2040,45,2100,57,2160,56.7C2220,57,2280,45,2340,39.7C2400,34,2460,34,2520,79.3C2580,125,2640,215,2700,255C2760,295,2820,283,2880,238C2940,193,3000,113,3060,96.3C3120,79,3180,125,3240,130.3C3300,136,3360,102,3420,90.7C3480,79,3540,91,3600,96.3C3660,102,3720,102,3780,96.3C3840,91,3900,79,3960,113.3C4020,147,4080,227,4140,238C4200,249,4260,193,4290,164.3L4320,136L4320,340L4290,340C4260,340,4200,340,4140,340C4080,340,4020,340,3960,340C3900,340,3840,340,3780,340C3720,340,3660,340,3600,340C3540,340,3480,340,3420,340C3360,340,3300,340,3240,340C3180,340,3120,340,3060,340C3000,340,2940,340,2880,340C2820,340,2760,340,2700,340C2640,340,2580,340,2520,340C2460,340,2400,340,2340,340C2280,340,2220,340,2160,340C2100,340,2040,340,1980,340C1920,340,1860,340,1800,340C1740,340,1680,340,1620,340C1560,340,1500,340,1440,340C1380,340,1320,340,1260,340C1200,340,1140,340,1080,340C1020,340,960,340,900,340C840,340,780,340,720,340C660,340,600,340,540,340C480,340,420,340,360,340C300,340,240,340,180,340C120,340,60,340,30,340L0,340Z"
            ></path>
          </svg>
          <div class="text">EXPLORE</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const left = document.getElementById("free_prods");
      const barLine = document.getElementById("bar_line");
      if (entry.intersectionRatio > 0) {
        left.classList.add("animateCards");
        barLine.classList.add("barAnimation");
      } else {
        left.classList.remove("animateCards");
        barLine.classList.remove("barAnimation");
      }
    });
  });
  const section = document.getElementById("free_prods");
  observer.observe(section);
});
</script>

<script>
import DesignCard from "../Widgets/DesignCard.vue";
import CurveButton from "../Widgets/CurveButton.vue";
import { ref, onMounted } from "vue";
export default {
  name: "PopularFreeProducts",
  components: {
    DesignCard,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.popular_free_products_container {
  @include dflex($justify: normal, $flex: column);
  width: 100%;
  height: 100vh;

  .header {
    @include header($fsize: 2rem, $shadow: none);
    margin-bottom: 2.5rem;
  }
  .popular_free_products {
    @include dflex($align: normal, $gap: 2rem);
    width: 75%;
    height: 100%;

    .left {
      @include dflex(
        $flex: column,
        $align: center,
        $justify: normal,
        $gap: 3rem
      );
      width: 75%;
      height: 100%;

      .upper,
      .lower {
        @include dflex($gap: 2rem);
        width: 100%;
        height: 52%;
        div {
          @include dflex($justify: normal, $align: normal, $flex: column);
          width: 100%;
          height: 100%;
        }
      }
    }
    .right {
      height: 100%;
      width: 20%;

      .bar_line {
        height: 100%;
        width: 200px;
        border-radius: 5px;
        background: $green;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        svg {
          position: absolute;
          transform: rotate(90deg);
          width: 46vw;
          height: 90vh;
          right: -14rem;
          transition: all 0.3s ease 0s;
          top: -3rem;
          filter: hue-rotate(-166deg) saturate(1.5) brightness(0.7);
          z-index: 8;
          transition: 1.7s;
        }
        .text {
          position: absolute;
          transform: rotate(-90deg);
          top: 38%;
          z-index: 10;
          left: -9rem;
          color: $text-color-white;
          font-size: 7rem;
          text-anchor: middle;
          font-weight: 600;
          transition: 1.7s;
        }

        &:hover {
          svg {
            transition: 1.7s;
            filter: hue-rotate(-198deg) saturate(1.5) brightness(1);
          }
          .text {
            transition: 1.7s;
            color: $orange;
          }
        }
      }
    }
  }

  @keyframes anime {
    0% {
      transform: translateX(72vw);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes barAnimate {
    0% {
      background: $green;
    }
    100% {
      background: $purple;
    }
  }

  .barAnimation {
    animation: barAnimate 1s ease-in-out forwards;
  }
  .animateCards {
    animation: anime 1s ease-in-out;
  }
}
</style>
