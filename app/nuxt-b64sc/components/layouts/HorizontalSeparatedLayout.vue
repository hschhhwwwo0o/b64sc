<template>
  <span class="container">
    <span class="horizontal-separated-content">
      <span class="left-side side">
        <slot name="left-side" />
      </span>
      <span class="right-side side">
        <slot name="right-side" />
      </span>
    </span>
  </span>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_vars.scss";

.container {
  min-height: 100vh;
  width: 100%;
  display: block;
}

.horizontal-separated-content {
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
}

.side {
  width: 50vw;
  min-height: 100vh;
  height: 100%;
}

.left-side {
  background-color: $black;
}

.right-side {
  background-color: $white;
}
</style>
