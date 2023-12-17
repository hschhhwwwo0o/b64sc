<template>
  <span class="container">
    <span>
      <span class="content">
        <slot />
      </span>
    </span>
  </span>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_vars.scss";

.container {
  min-height: 100vh;
  width: 100%;
  display: block;
}

.content {
  min-height: 100vh;
  width: 100%;
}
</style>
