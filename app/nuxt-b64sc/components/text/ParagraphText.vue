<template>
  <span class="container">
    <p :style="paragraphColor" class="paragraph">
      <slot />
    </p>
  </span>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "light",
      required: true,
      validator(value) {
        return ["light", "dark"].includes(value);
      },
    },
  },
  computed: {
    paragraphColor() {
      return this.color === "light" ? "#ADADAD" : "#2D2D2D";
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
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
