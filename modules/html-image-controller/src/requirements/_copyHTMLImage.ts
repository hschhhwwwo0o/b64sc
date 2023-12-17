/**
 * Copying an image to the clipboard
 * @requirement UF/FINAL-IMAGE/COPY
 */
export function _copyHTMLImage(_imageElement: HTMLImageElement | null = null) {
  console.log("?");
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

  console.log("??");

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

  /** Create blob */
  async function _getBlobImage(): Promise<Blob> {
    const blob: Blob | PromiseLike<Blob> | null = await new Promise((resolve) =>
      _canvasElement.toBlob(resolve),
    );
    return blob || new Blob();
  }

  /** Copy blob */
  navigator.clipboard.write([
    new ClipboardItem({
      "image/png": _getBlobImage(),
    }),
  ]);
}
