<template>
  <div class="product_features_container">
    <div class="left">
      <div class="md-content" v-html="this.testMd"></div>
      <hr class="v_line" />
      <div class="certified">Certified product by: Ionic Designs</div>
    </div>
    <div class="right">
      <div class="tech_stack_header">Tech Stack</div>
      <div class="tech_stack"></div>
      <hr class="v_line" />

      <div class="switcher">
        <span
          :class="{ active_: this.showDetails }"
          @click="this.showDetails = true"
          ><v-icon name="ai-obp" /> Details</span
        >
        <span
          :class="{ active_: !this.showDetails }"
          @click="this.showDetails = false"
          ><v-icon name="bi-info-circle" /> Product Info</span
        >
      </div>
      <hr class="v_line" />
      <div class="details" v-if="this.showDetails === true">
        <div>
          <span> <v-icon name="pr-cloud-download" />Downloads</span>
          <span>100+</span>
        </div>
        <div>
          <span><v-icon name="fa-gitter" />Versions</span><span>15</span>
        </div>
        <div>
          <span><v-icon name="md-checklist-outlined" />Change Log</span
          ><span>50</span>
        </div>
        <div>
          <span><v-icon name="md-loop" />Updated</span><span>-</span>
        </div>
        <div>
          <span> <v-icon name="bi-bootstrap-reboot" />Released </span>
          <span> -</span>
        </div>
        <div>
          <span><v-icon name="co-star" />Reviews</span><span></span>-
        </div>
      </div>

      <div class="product_info" v-else>
        <div>
          <span><v-icon name="si-jetpackcompose" />Components</span
          ><span>100+</span>
        </div>
        <div>
          <span><v-icon name="bi-plug-fill" />Custom Plugins</span
          ><span>15</span>
        </div>
        <div>
          <span><v-icon name="md-filterframes" />Example Pages</span
          ><span>50</span>
        </div>
        <div>
          <span><v-icon name="bi-arrow-up-circle-fill" />Optimized Code </span>
          <span> <v-icon name="bi-check-lg" class="tick" /></span>
        </div>
        <div>
          <span><v-icon name="fa-mobile" />Fully Responsive</span>
          <span><v-icon name="bi-check-lg" class="tick" /> </span>
        </div>
        <div>
          <span><v-icon name="io-stats-chart" />Fully Scalable</span
          ><span><v-icon name="bi-check-lg" class="tick" /></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import markdownContent from "../../assets/exampleMarkdown";

export default {
  name: "ProductFeaturesContainer",
  data() {
    return {
      testMd: marked.parse(markdownContent),
      showDetails: true,
    };
  },
  methods: {
    // mapper function for creating tech stack svg list.
  },
};
</script>
<style lang="scss" scoped>
.product_features_container {
  @include dflex($align: normal);
  width: 80%;
  height: fit-content;
  min-height: 100vh;
  margin-top: 3rem;

  .left {
    width: 75%;
    .v_line {
      opacity: 0.6;
    }
    .certified {
      @include dflex;
      font-size: 12px;
      opacity: 0.6;
    }
  }

  .right {
    width: 25%;
    color: $text-black-08;
    .switcher {
      @include dflex($gap: 3rem);
      margin-top: 1.5rem;
      span {
        cursor: pointer;
        padding: 5px;
      }

      .active_ {
        transition: 0.4s;
        background: $purple;
        color: white;
        border-radius: 10px;
      }
    }

    .product_info,
    .details {
      @include dflex($justify: normal, $align: normal, $flex: column);
      margin-top: 2rem;
      padding: 0 5px;
      div {
        @include dflex($justify: space-between, $align: normal);
      }
      .tick {
        color: $green;
      }
      svg {
        width: 25px;
        height: 25px;
        opacity: 0.7;
      }
    }
  }
}
</style>
