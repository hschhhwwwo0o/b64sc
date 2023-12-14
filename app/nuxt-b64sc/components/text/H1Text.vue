<template>
  <span class="container">
    <h1 :style="`color: ${h1Color}`" class="h1">
      <slot></slot>
    </h1>
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
.h1 {
  font-family: "Playfair Display";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>
