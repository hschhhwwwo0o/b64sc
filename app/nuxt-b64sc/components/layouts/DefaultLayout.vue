<template>
  <span :class="`container ${withSeparatedBGClass}`">
    <span class="content">
      <slot />
    </span>
  </span>
</template>

<script>
export default {
  props: {
    withSeparatedBG: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    withSeparatedBGClass() {
      if (this.withSeparatedBG === true) {
        return "separated-bg";
      }
      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_vars.scss";

.container {
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  justify-content: center;
}

.separated-bg {
  background: rgb(26, 26, 26);
  background: linear-gradient(90deg, $black 50%, $white 50%);
}

.content {
  width: 100%;
  max-width: 1440px;
  height: 100%;
  min-height: 100vh;
  display: block;
}
</style>
