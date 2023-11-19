<template>
  <div>
    <default-layout with-separated-b-g>
      <textarea-input :style="`contrast`" />
      <text-button color="danger"> Clear </text-button>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from "./components/layouts/DefaultLayout.vue";
import TextButton from "./components/form/TextButton.vue";
import TextareaInput from "./components/form/TextareaInput.vue";

export default {
  components: { DefaultLayout, TextButton, TextareaInput },
};
</script>
