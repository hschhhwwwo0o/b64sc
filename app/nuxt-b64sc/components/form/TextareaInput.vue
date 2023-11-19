<template>
  <span class="container">
    <textarea
      :class="`${styleClass}`"
      :name="name"
      :placeholder="placeholder"
    />
  </span>
</template>

<script>
export default {
  props: {
    style: {
      type: String,
      default: "standart",
      validator(value) {
        ["standart", "contrast"].includes(value);
      },
      required: true,
    },
    placeholder: {
      type: String,
      default: "Enter...",
      required: true,
    },
    name: {
      type: String,
      default: "textarea.",
      required: true,
    },
  },
  computed: {
    styleClass() {
      if (this.style === "standart") {
        return "standart";
      }
      if (this.style === "contrast") {
        return "contrast";
      }
      return "standart";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_vars.scss";

.container {
  display: block;
  margin-top: 4px;
}

.contrast {
  width: 100%;
  max-width: 600px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: transparent;
  border-color: $brandColor;
  color: $brandColor;

  &::placeholder {
    color: $brandColor;
    opacity: 0.5;
  }
}

.standart {
  width: 100%;
  max-width: 600px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: transparent;
  border-color: $white;
  color: $white;

  &::placeholder {
    color: $white;
    opacity: 0.5;
  }
}
</style>
