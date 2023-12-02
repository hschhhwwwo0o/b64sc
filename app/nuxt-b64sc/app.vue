<template>
  <div>
    <default-layout>
      <template #left-side> hi </template>
      <template #right-side> hi </template>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from "./components/layouts/DefaultLayout.vue";

export default {
  components: { DefaultLayout },
};
</script>
