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
      validator(value: string) {
        return ["light", "dark"].includes(value);
      },
    },
  },
  computed: {
    paragraphColor() {
      return this.color === "light" ? "color: #ADADAD" : "color: #2D2D2D";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: block;
}
.paragraph {
  font-family: Playfair Display;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
