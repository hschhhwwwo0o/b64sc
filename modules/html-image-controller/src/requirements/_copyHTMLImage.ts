/**
 * Copying an image to the clipboard
 * @requirement UF/FINAL-IMAGE/COPY
 */
export function _copyHTMLImage(_imageElement: HTMLImageElement | null = null) {
  /** Create canvas */
  const _canvasElement: HTMLCanvasElement = (function _createCanvas(
    _imageElement: HTMLImageElement | null,
  ) {
    const _canvas = document.createElement("canvas");
    if (_imageElement) {
      _canvas.width = _imageElement.width;
      _canvas.height = _imageElement.height;
    }
    return _canvas;
  })(_imageElement);

  /** Draw image on canvas */
  (function _drawImageOnCanvas(
    _canvasElement: HTMLCanvasElement,
    _imageElement: HTMLImageElement | null,
  ): void {
    if (_imageElement) {
      _canvasElement
        ?.getContext("2d")
        ?.drawImage(
          _imageElement,
          0,
          0,
          _imageElement.width,
          _imageElement.height,
        );
    }
  })(_canvasElement, _imageElement);

  /** Copy image to clipboard */
  (function _copyBlobImageToClipboard(_canvasElement: HTMLCanvasElement): void {
    _canvasElement.toBlob(function _blobHandler(_blob: Blob | null) {
      try {
        if (_blob) {
          navigator.clipboard.write([
            new ClipboardItem({
              "image/png": _blob,
            }),
          ]);
        } else {
          throw "Blob error";
        }
      } catch (error) {
        console.error(error);
      }
    }, "image/png");
  })(_canvasElement);
}
