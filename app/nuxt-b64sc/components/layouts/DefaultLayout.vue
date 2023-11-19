<template>
  <span class="container">
    <span class="content">
      <slot />
    </span>
  </span>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  justify-content: center;
}
.content {
  width: 100%;
  max-width: 1440px;
  height: 100%;
  min-height: 100vh;
  display: block;
}
</style>
