<template>
  <span class="container">
    <span :class="`left-round ${style}`"></span>
    <span :class="`border ${style}`"></span>
    <span :class="`right-round ${style}`"></span>
  </span>
</template>

<script lang="ts">
export default {
  props: {
    style: {
      type: String,
      validator(value: string) {
        return ["light", "dark"].includes(value);
      },
      required: true,
      default: "light",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_vars.scss";

.light {
  border-color: $separateLightGray;
}

.dark {
  border-color: $separateDarkGray;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .left-round {
    height: 16px;
    width: 11px;
    border-style: solid;
    border-width: 1px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
  }

  .border {
    width: calc(100% - 22px);
    border-style: solid;
    border-top-width: 1px;
  }

  .right-round {
    height: 16px;
    width: 11px;
    border-style: solid;
    border-width: 1px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
  }
}
</style>
