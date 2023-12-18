import { _createCanvasElement } from "./utils/_createCanvasElement";
import { _drawImageOnCanvas } from "./utils/_drawImageOnCanvas";
import { _getBlobImage } from "./utils/_getBlobImage";

/**
 * Copying an image to the clipboard
 * @requirement UF/FINAL-IMAGE/COPY
 */
export function _copyHTMLImage(_imageElement: HTMLImageElement | null = null) {
  /** Create canvas */
  const _canvasElement: HTMLCanvasElement = _createCanvasElement(_imageElement);

  /** Draw image on canvas */
  _drawImageOnCanvas(_canvasElement, _imageElement);

  /** Copy blob */
  navigator.clipboard.write([
    new ClipboardItem({
      "image/png": _getBlobImage(_canvasElement),
    }),
  ]);
}
