<template>
  <span class="container">
    <p :style="paragraphColor" class="paragraph">
      <slot />
    </p>
  </span>
</template>

<script lang="ts">
export default {
  props: {
    color: {
      type: String,
      default: "light",
      required: true,
      validator(value: string): boolean {
        return ["light", "ultra-light", "dark"].includes(value);
      },
    },
  },
  computed: {
    paragraphColor() {
      if (this.color === "light") {
        return "color: #ADADAD";
      }
      if (this.color === "ultra-light") {
        return "color: #ECECEC";
      }
      if (this.color === "dark") {
        return "color: #2D2D2D";
      }
      return "color: #ADADAD";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: block;
}
.paragraph {
  font-family: "Playfair Display";
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
</style>
