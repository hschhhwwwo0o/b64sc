<template>
  <span class="wrapper">
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
  </span>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_vars.scss";

.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(26, 26, 26);
  background: linear-gradient(90deg, $black 50%, $white 50%);
}

.container {
  min-height: 100vh;
  width: 100%;
  max-width: 1440px;
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
  display: block;
  box-sizing: border-box;
}

.left-side {
  background-color: $black;
}

.right-side {
  background-color: $white;
}
</style>
