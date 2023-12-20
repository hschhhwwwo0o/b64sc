<template>
  <div>
    <layout-horizontal-separated>
      <template #left-side>
        <div>
          <div>
            <div class="horizontal-paddings vertical-paddings">
              <text-header1-element :color="'light'"
                >B64SC / Base64StringConverter</text-header1-element
              >
              <div class="top-2">
                <text-paragraph-element :color="'light'">
                  Converter base64 strings to high quality images for further
                  image download/copying. Base64 is a group of similar
                  binary-to-text encoding schemes that represent binary data in
                  an ASCII string format by translating it into a radix-64
                  representation. Use the simple and intuitive user interface of
                  our service to convert base64 string. Just enter the base64
                  string in the appropriate field and download your image in the
                  highest quality without watermarks.
                </text-paragraph-element>
              </div>
            </div>
            <decore-border-separate :style="'dark'" />
          </div>
          <div>
            <div class="horizontal-paddings vertical-paddings">
              <base-64-textarea-input />
            </div>
            <decore-border-separate :style="'dark'" />
          </div>
          <div>
            <div class="horizontal-paddings vertical-paddings">
              <div>
                <text-link-element
                  :to="'https://github.com/hschhhwwwo0o/b64sc'"
                  :target="'_blank'"
                  >The project has been posted on GitHub</text-link-element
                >
              </div>
              <div class="top-2">
                <text-link-element
                  :to="'https://github.com/hschhhwwwo0o'"
                  :target="'_blank'"
                  >Project author on GitHub</text-link-element
                >
              </div>
              <div class="top-2">
                <text-link-element
                  :to="'https://telegram.dog/hschhhwwwo0o'"
                  :target="'_blank'"
                  >Project author on Telegram</text-link-element
                >
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #right-side>
        <div>
          <div class="horizontal-paddings vertical-paddings">
            <text-header2-element :color="'dark'">Result</text-header2-element>
            <div class="top-2">
              <text-paragraph-element :color="'dark'">
                The result of the service will appear in the highlighted window
                below after specifying the base64 string in the corresponding
                field
              </text-paragraph-element>
            </div>
          </div>
          <decore-border-separate :style="'light'" />
        </div>
        <div
          style="
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            flex-grow: 1;
            flex-direction: column;
          "
          class="horizontal-paddings vertical-paddings"
        >
          <final-image-controls />
          <base-64-preview />
        </div>
      </template>
    </layout-horizontal-separated>
  </div>
</template>

<script lang="ts">
/** Modules compositions */
import { Base64ConverterModuleComposition } from "modules-compositions/Base64Converter";

export default {
  components: {
    Base64TextareaInput:
      Base64ConverterModuleComposition.view.Base64TextareaInput,
    Base64Preview: Base64ConverterModuleComposition.view.Base64Preview,
    FinalImageControls:
      Base64ConverterModuleComposition.view.FinalImageControls,
  },
};
</script>
