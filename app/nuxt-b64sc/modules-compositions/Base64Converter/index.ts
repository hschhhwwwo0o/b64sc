/** Views */
import Base64Preview from "./view/Base64Preview.vue";
import Base64TextareaInput from "./view/Base64TextareaInput.vue";
import FinalImageControls from "./view/FinalImageControls.vue";

/** Utils */
import { _clear } from "./utils/_clear";

const Base64ConverterModuleComposition = {
  view: {
    Base64Preview,
    Base64TextareaInput,
    FinalImageControls,
  },
  utils: {
    /** @requirement UF/CLEAR-INPUT-BASE64 */
    clear: _clear,
  },
};

export { Base64ConverterModuleComposition };
