import { _createCanvasElement } from "./utils/_createCanvasElement";
import { _createImageElement } from "./utils/_createImageElement";
import { _drawImageOnCanvas } from "./utils/_drawImageOnCanvas";
import { _formatBase64String } from "./utils/_formatBase64String";
import { _isCompletedBase64String } from "./utils/_isCompletedBase64String";

/**
 * Generate dataURL
 * @requirement UF/FINAL-IMAGE/DATA-URL
 */
export async function _generateDataURL(
  base64: string = "",
): Promise<string | undefined> {
  try {
    /**
     * Checking the correctness of the original base64 string.
     */
    const isCompletedBase64String: boolean = _isCompletedBase64String(base64);

    /**
     * If the initially entered string is correct, we return the result.
     * Otherwise the script continues working
     */
    if (isCompletedBase64String) {
      return base64;
    }

    /**
     * Formatting of the entered base64 string.
     */
    const dataUrlBase64: string = _formatBase64String(base64);

    /** Create image HTML element from base64 string */
    const image: HTMLImageElement = await _createImageElement(dataUrlBase64);

    /** Create canvas HTML element */
    const _canvasElement: HTMLCanvasElement = _createCanvasElement(image);

    /** Draw image on canvas */
    _drawImageOnCanvas(_canvasElement, image);

    /** Get dataUrl */
    const dataUrl: string = _canvasElement.toDataURL("image/png", 1);

    return dataUrl;
  } catch (error) {
    console.error(error);
  }
}
