<template>
  <span class="container">
    <span :class="`label ${labelStyleClass}`">
      {{ label }}
    </span>
    <textarea
      :class="`${styleClass}`"
      :name="`${name}`"
      :placeholder="`${placeholder}`"
      :value="`${value}`"
      @input="$emit('change', $event.target.value)"
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
        return ["standart", "contrast"].includes(value);
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
    value: {
      type: String,
      default: "",
      required: true,
    },
    label: {
      type: String,
      default: "",
      required: false,
    },
  },
  emits: ["change"],
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
    labelStyleClass() {
      if (this.style === "standart") {
        return "standart-label";
      }
      if (this.style === "contrast") {
        return "contrast-label";
      }
      return "standart-label";
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
  box-sizing: border-box;
  min-height: 90px;

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
  box-sizing: border-box;
  min-height: 90px;

  &::placeholder {
    color: $white;
    opacity: 0.5;
  }
}

.label {
  display: block;
  padding-bottom: 10px;
}

.standart-label {
  color: $white;
}

.contrast-label {
  color: $brandColor;
}
</style>
