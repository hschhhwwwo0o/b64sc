<template>
  <span class="container">
    <button :class="`button ${textColorClass}`" @click="$emit('click')">
      <slot />
    </button>
  </span>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "white",
      validator(value) {
        return ["white", "contrast", "danger"].includes(value);
      },
    },
  },
  emits: {
    click: null,
  },
  computed: {
    textColorClass() {
      if (this.color === "white") {
        return "buttonWhiteTextColor";
      }
      if (this.color === "contrast") {
        return "buttonContrastTextColor";
      }
      if (this.color === "danger") {
        return "buttonDangerTextColor";
      }
      return "buttonWhiteTextColor";
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/_vars.scss";

.container {
  display: block;
}
.button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: Playfair Display;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
}

.buttonWhiteTextColor {
  color: #adadad;
}

.buttonContrastTextColor {
  color: $brandColor;
}

.buttonDangerTextColor {
  color: $red;
}
</style>
