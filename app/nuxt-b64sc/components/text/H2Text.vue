<template>
  <span class="container">
    <h2 :style="`color: ${h1Color}`" class="h2">
      <slot></slot>
    </h2>
  </span>
</template>

<script lang="ts">
export default {
  props: {
    color: {
      type: String,
      default: "light",
      required: true,
      validator(value: string) {
        return ["light", "dark"].includes(value);
      },
    },
  },
  computed: {
    h1Color() {
      return this.color === "light" ? "#f2f2f2" : "#1B1B1B";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: block;
}
.h2 {
  font-family: "Playfair Display";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
</style>
