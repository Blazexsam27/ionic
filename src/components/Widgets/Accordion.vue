<template>
  <div>
    <div v-for="(item, index) in items" :key="index" class="accordion-item">
      <div class="accordion-header" @click="toggleAccordion(index)">
        {{ item.title }}
      </div>
      <div
        v-if="item.expanded"
        class="accordion-content"
        :style="{ maxHeight: item.expanded ? '1000px' : 0 }"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleAccordion(index) {
      this.items[index].expanded = !this.items[index].expanded;
    },
  },
};
</script>

<style lang="scss">
$accordion-background: #eee;
$content-background: #f9f9f9;
$border-color: #ccc;
$border-radius: 5px;

.accordion-item {
  margin-bottom: 10px;
}

.accordion-header {
  cursor: pointer;
  padding: 10px;
  background-color: $accordion-background;
  border: 1px solid $border-color;
  border-radius: $border-radius;
}

.accordion-content {
  overflow: hidden;
  padding: 10px;
  background-color: $content-background;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  transition: max-height 1s ease-in-out;
}
</style>
