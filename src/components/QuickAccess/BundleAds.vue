<template>
  <div class="bundle_ads_container">
    <div class="bundle_ad">
      <div class="heading">Winter Special Bundle 🎉</div>
      <div class="subheader">
        Hurry up and get our speacial bundles with extremely discounted price
        that will help you build your web projects in no time.
      </div>
      <!-- Card -->
      <div class="ad_card">
        <img
          :src="this.bundle_ad_bg"
          alt="latest_design_bundle_free"
          class="bundle_bg"
        />
        <div class="tint"></div>
        <div class="card_header">Winter Bundle</div>
        <div class="card_subheader">
          Get access to all of our Premium Products
        </div>
        <div class="features">
          <div class="upper_row">
            <div class="div1">
              <span class="left">
                <v-icon name="si-stackbit" />
              </span>
              <span class="right">
                <div>100+</div>
                <div>Products</div>
              </span>
            </div>
            <div class="div2">
              <span class="left">
                <v-icon name="io-logo-web-component" />
              </span>
              <span class="right">
                <div>1000+</div>
                <div>Components</div>
              </span>
            </div>
          </div>
          <div class="lower_row">
            <div class="div1">
              <span class="left">
                <v-icon name="si-affinitydesigner" />
              </span>
              <span class="right">
                <div>800+</div>
                <div>Sections</div>
              </span>
            </div>
            <div class="div2">
              <span class="left">
                <v-icon name="md-widgets-round" />
              </span>
              <span class="right">
                <div>500+</div>
                <div>Widgets</div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- Price -->
      <div class="price_details">
        <div class="upper">
          <div class="header">Cool Winter Bundle</div>
          <div>
            <span class="actual_price">$10000</span>
            <span class="discount_price">$100</span>
          </div>
        </div>
        <div class="mid">100+ premium products included</div>

        <div class="buy_now">
          <Button text="Buy Now ⭐" :onClick="this.buyNow" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bundle_ad_bg from "../../assets/images/bundle_ad_bg.jpg";
import Button from "../Widgets/Button.vue";
export default {
  name: "BundleAds",
  components: {
    Button,
  },

  data() {
    return {
      bundle_ad_bg,
    };
  },

  methods: {
    buyNow() {
      console.log("CLICK");
    },
  },
};
</script>
<style lang="scss" scoped>
.bundle_ads_container {
  @include dflex;
  width: 100%;
  height: 150vh;

  .bundle_ad {
    @include dflex($justify: start, $flex: column);
    width: 70%;
    height: 80%;
    background-color: $text-color-white-05;
    border-radius: 10px;
    padding: 1.5rem;

    .heading {
      @include header;
      padding-top: 2rem;
      text-align: center;
    }
    .subheader {
      padding-top: 2rem;
      @include subheader(1.3rem, $shadow: none);
      text-align: center;
      width: 70%;
    }

    .ad_card {
      @include dflex($justify: start, $flex: column);
      @include boxshadow($green);
      margin-top: 2.5rem;
      width: 50%;
      height: 50%;
      border-radius: 10px;
      background: $blue;
      opacity: 0.9;
      position: relative;

      .bundle_bg {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        border-radius: inherit;
        animation: bundle_bg_animation 5s ease infinite;
      }
      .tint {
        background: $blue-08;
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        border-radius: inherit;
      }
      .card_header {
        @include header($fsize: 2rem, $color: #fff);
        font-weight: 600;
        padding-top: 3.5rem;
        position: relative;
        z-index: 10;
      }
      .card_subheader {
        @include header(1.2rem, $color: #fff);
        padding-top: 1rem;
        position: relative;
        z-index: 10;
      }

      .features {
        color: $text-color-white;
        padding-top: 2rem;
        position: relative;
        z-index: 10;

        .upper_row {
          @include dflex($justify: space-between, $gap: 4rem);
          position: relative;
          width: 400px;
          .div1,
          .div2 {
            @include dflex;
            .left {
              svg {
                width: 60px;
                height: 60px;
              }
            }
          }

          .div1 {
            .left {
            }
            .right {
            }
          }
          .div2 {
            .left {
            }
            .right {
            }
          }
        }
        .lower_row {
          @include dflex($justify: space-between, $gap: 4rem);
          padding-top: 2rem;
          width: 378px;
          position: relative;
          .div1,
          .div2 {
            @include dflex;
            .left {
              svg {
                width: 60px;
                height: 60px;
              }
            }
          }

          .div1 {
            .left {
            }
            .right {
            }
          }
          .div2 {
            .left {
            }
            .right {
            }
          }
        }
      }
    }
    .price_details {
      width: 50%;
      height: fit-content;
      .upper {
        @include dflex(space-between, normal);
        padding: 10px 1rem;
        .header {
          @include header($fsize: 1.2rem);
        }
        .actual_price {
          text-decoration: line-through;
        }
        .discount_price {
          color: $orange-red;
          padding-left: 10px;
          font-weight: 600;
        }
      }
      .mid {
        padding-left: 1rem;
      }
      .buy_now {
        @include dflex;
        padding: 2.5rem 0;
      }
    }
  }

  @keyframes bundle_bg_animation {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
}
</style>
