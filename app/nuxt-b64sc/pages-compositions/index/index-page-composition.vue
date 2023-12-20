<template>
  <div>
    <layout-horizontal-separated>
      <template #left-side>
        <div>
          <div>
            <page-title />
            <decore-border-separate :style="'dark'" />
          </div>
          <div>
            <div class="horizontal-paddings vertical-paddings">
              <base-64-textarea-input />
            </div>
            <decore-border-separate :style="'dark'" />
          </div>
          <div>
            <links-view />
          </div>
        </div>
      </template>
      <template #right-side>
        <div>
          <result-title />
          <decore-border-separate :style="'light'" />
        </div>
        <final-image-layout>
          <final-image-controls />
          <base-64-preview />
        </final-image-layout>
      </template>
    </layout-horizontal-separated>
  </div>
</template>

<script lang="ts">
/** Modules compositions */
import { Base64ConverterModuleComposition } from "modules-compositions/Base64Converter";

/** Layouts */
import FinalImageLayout from "./layouts/final-image-layout.vue";

/** Components */
import PageTitle from "./components/page-title.vue";
import ResultTitle from "./components/result-title.vue";
import LinksView from "./components/links-view.vue";

export default {
  components: {
    Base64TextareaInput:
      Base64ConverterModuleComposition.view.Base64TextareaInput,
    Base64Preview: Base64ConverterModuleComposition.view.Base64Preview,
    FinalImageControls:
      Base64ConverterModuleComposition.view.FinalImageControls,
    PageTitle,
    ResultTitle,
    LinksView,
    FinalImageLayout,
  },
};
</script>
