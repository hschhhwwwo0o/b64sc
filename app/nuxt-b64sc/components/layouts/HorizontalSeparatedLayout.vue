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

<script lang="ts">
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

  @media screen and (max-width: 900px) {
    display: block;
  }
}

.container {
  min-height: 100vh;
  width: 100%;
  max-width: 1440px;
  display: block;

  @media screen and (min-width: 1440px) {
    border-style: solid;
    border-right-width: 1px;
    border-left-width: 1px;
    border-left-color: $separateDarkGray;
    border-right-color: $separateLightGray;
  }
}

.horizontal-separated-content {
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    min-height: auto;
  }
}

.side {
  width: 50vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media screen and (max-width: 900px) {
    width: 100%;
    min-height: auto;
  }
}

.left-side {
  background-color: $black;
}

.right-side {
  background-color: $white;
}
</style>
