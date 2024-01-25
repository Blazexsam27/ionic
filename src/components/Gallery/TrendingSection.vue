<template>
  <div class="section">
    <div class="card">
      <button class="buynow" @click="this.redirect">Buy-Now</button>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
export default {
  name: "TrendingSection",
  setup() {
    let stripe = null;

    onMounted(async () => {
      try {
        stripe = await Stripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);
      } catch (error) {
        console.error("Error", error);
      }
    });

    function redirect() {
      if (stripe) {
        stripe.redirectToCheckout({
          successUrl: import.meta.emit.VITE_BASE_CLIENT_URL,
          cancelUrl: `${import.meta.emit.VITE_BASE_CLIENT_URL}/gallery`,
          lineItems: [
            {
              price: "price_1OXmnYSJ35c5jNwYwQICPQQA",
              quantity: 1,
            },
          ],
          mode: "payment",
        });
      }
    }

    return { redirect };
  },
};
</script>
<style lang="scss" scoped>
.section {
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;

  .card {
    width: 200px;
    height: 100px;
    border: 1px solid gray;
    box-shadow: 0 0 9px -2px gray;
    @include dflex;

    .buynow {
      border: none;
      background: $purple;
      color: $white;
      padding: 1rem;
      text-align: center;
    }
  }
}
</style>
