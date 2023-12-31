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
      @input="$emit('change', $event?.target?.value)"
    />
  </span>
</template>

<script lang="ts">
export default {
  props: {
    style: {
      type: String,
      default: "standart",
      validator(value: string): boolean {
        return ["standart", "contrast"].includes(value);
      },
      required: true,
    },
    resize: {
      type: String,
      default: "auto",
      required: false,
      validator(value: string): boolean {
        return ["auto", "none"].includes(value);
      },
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
      let className: string = "standart";
      if (this.style === "standart") {
        className = "standart";
      }
      if (this.style === "contrast") {
        className = "contrast";
      }
      if (this.resize === "none") {
        className = `${className} resize-none`;
      }
      return className;
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
  color: $brandColorLighter;
  box-sizing: border-box;
  min-height: 90px;
  font-family: "Playfair Display";

  &::placeholder {
    color: $brandColorLighter;
    opacity: 0.5;
    font-family: "Playfair Display";
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
  font-family: "Playfair Display";

  &::placeholder {
    color: $white;
    opacity: 0.5;
    font-family: "Playfair Display";
  }
}

.label {
  display: block;
  padding-bottom: 10px;
  font-family: "Playfair Display";
}

.standart-label {
  color: $white;
}

.contrast-label {
  color: $brandColorLighter;
}

.resize-none {
  resize: none;
}
</style>
