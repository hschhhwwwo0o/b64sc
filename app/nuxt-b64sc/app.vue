<template>
  <div>
    <horizontal-separated-layout>
      <template #left-side>
        <base-64-textarea-input />
      </template>
      <template #right-side>
        <base-64-preview />
      </template>
    </horizontal-separated-layout>
  </div>
</template>

<script>
import HorizontalSeparatedLayout from "./components/layouts/HorizontalSeparatedLayout.vue";
import { Base64ConverterModuleUI } from "./modules-ui/Base64Converter/index";

export default {
  components: {
    HorizontalSeparatedLayout,
    Base64TextareaInput: Base64ConverterModuleUI.view.Base64TextareaInput,
    Base64Preview: Base64ConverterModuleUI.view.Base64Preview,
  },
};
</script>
