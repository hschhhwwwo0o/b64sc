<template>
  <div>
    <default-layout with-separated-b-g>
      <text-button color="danger"> Clear </text-button>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from "./components/layouts/DefaultLayout.vue";
import TextButton from "./components/form/TextButton.vue";

export default {
  components: { DefaultLayout, TextButton },
};
</script>
