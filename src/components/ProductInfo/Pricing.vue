<template>
  <div class="pricing_container">
    <div class="header">Choose Your Licence</div>
    <div class="pricing">
      <div class="features">
        <ul>
          <li>Documentation</li>
          <li>Full Code</li>
          <li>Assets</li>
          <li>Use in SaaS</li>
          <li>Free Updates</li>
        </ul>
      </div>
      <div class="personal">
        <div class="upper">
          <div class="header">Personal</div>
          <div class="subheader">Best for personal web or mobile apps</div>
          <div class="price">$19</div>
          <div class="buy_now">
            <CustomizableButton text="Buy Now" width="140px" height="30px" />
          </div>
        </div>

        <div class="includes_feats">
          <ul>
            <li><v-icon name="bi-check-lg" /></li>
            <li><v-icon name="bi-check-lg" /></li>
            <li><v-icon name="bi-check-lg" /></li>
            <li><v-icon name="bi-check-lg" /></li>
            <li><v-icon name="bi-check-lg" /></li>
          </ul>
        </div>
      </div>
      <div class="freelance">
        <div class="upper">
          <div class="header">Freelancer</div>
          <div class="subheader">
            Best for personal/client web or mobile apps
          </div>
          <div class="price">$39</div>
          <div class="buy_now">
            <CustomizableButton
              text="Buy Now"
              width="140px"
              height="30px"
              background="#5352ed"
            />
          </div>
        </div>
        <div class="includes_feats">
          <ul>
            <li><v-icon name="bi-check-lg" /></li>
            <li><v-icon name="bi-check-lg" /></li>
            <li><v-icon name="bi-check-lg" /></li>
            <li><v-icon name="bi-check-lg" /></li>
            <li><v-icon name="bi-check-lg" /></li>
          </ul>
        </div>
      </div>
      <div class="gold">
        <div class="upper">
          <div class="header">Gold</div>
          <div class="subheader">
            Perfect for web or mobile or SaaS projects
          </div>
          <div class="price">$99</div>
          <div class="buy_now">
            <CustomizableButton text="Buy Now" width="140px" height="30px" />
          </div>
        </div>
        <div class="includes_feats">
          <ul>
            <li><v-icon name="bi-check-lg" /></li>
            <li><v-icon name="bi-check-lg" /></li>
            <li><v-icon name="bi-check-lg" /></li>
            <li><v-icon name="bi-check-lg" /></li>
            <li><v-icon name="bi-check-lg" /></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="secured_payments">
      <v-icon name="bi-shield-lock-fill" />Secured payment by<b>Stripe</b>with:
    </div>
    <div class="payment_options">
      <v-icon name="co-cc-visa" scale="2.5" />
      <v-icon name="co-american-express" scale="2.5" />
      <v-icon name="co-cc-mastercard" scale="2.5" />
    </div>
  </div>
</template>
<script>
import CustomizableButton from "../Widgets/CustomizableButton.vue";
export default {
  name: "Pricing",
  components: {
    CustomizableButton,
  },
};
</script>
<style lang="scss" scoped>
.pricing_container {
  @include dflex($justify: normal, $flex: column);
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  margin-top: 5rem;

  .header {
    @include header($shadow: none);
  }
  .pricing {
    @include dflex($gap: 0);
    @include boxshadow($color: $orange-05);
    margin-top: 1.5rem;
    width: 75%;
    height: 80vh;
    border-radius: 10px;
    background: $white;

    .features {
      @include dflex($align: start, $justify: end, $flex: column, $gap: 0.8rem);
      width: 15%;
      height: 100%;
      display: flex;
      justify-content: end;
      align-items: start;
      flex-direction: column;

      margin-bottom: 6rem;

      ul {
        @include dflex($align: start, $flex: column);
        list-style: square;
      }
    }

    .freelance,
    .gold,
    .personal {
      @include dflex(
        $justify: space-between,
        $align: center,
        $flex: column,
        $gap: 0.7rem
      );
      width: 28%;
      height: 100%;
      .upper {
        @include dflex(
          $justify: start,
          $align: center,
          $flex: column,
          $gap: 0.7rem
        );
        .header {
          @include header($fsize: 1.5rem, $shadow: none);
          text-align: center;
          margin-top: 2rem;
        }
        .subheader {
          @include subheader($fsize: 0.8rem, $shadow: none);
          text-align: center;
          width: 75%;
        }
        .price {
          @include header($fsize: 1.8rem, $shadow: none);
          text-align: center;
        }
      }

      .includes_feats {
        margin-bottom: 4rem;
        ul {
          margin: 0;
          padding: 0;
          @include dflex($flex: column);
          li {
            list-style: none;
            svg {
              width: 21px;
              height: 21px;
            }
          }
        }
      }
    }

    .freelance {
      background: $orange;
      .upper {
        .header,
        .subheader,
        .price {
          color: $white;
          text-shadow: $text-shadow-08;
        }
      }

      .includes_feats {
        ul {
          li {
            color: #fff;
          }
        }
      }
    }
  }

  .secured_payments {
    @include dflex($gap: 0.3rem);
    margin-top: 1.5rem;
  }

  .payment_options {
    @include dflex($align: normal, $gap: 0.4rem);
    margin-bottom: 2rem;
  }
}
</style>
