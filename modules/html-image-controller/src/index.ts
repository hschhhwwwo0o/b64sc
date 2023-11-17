class HTMLImageController {
  private _imageElement: HTMLImageElement | null = null;

  constructor(imageElementID = "") {
    const imageElement: HTMLImageElement | null = document.querySelector(
      `#${imageElementID.replace("#", "")}`,
    );
    if (imageElement === null) {
      console.warn(
        `The element with the identifier ${imageElementID} was not found`,
      );
    }
    this._imageElement = imageElement;
  }

  /**
   * Download image
   * @requirement UF/FINAL-IMAGE/DOWNLOAD
   */
  public async downloadImage(): Promise<void> {
    const _linkElement = document.createElement("a");
    _linkElement.href = this._imageElement?.src || "";
    _linkElement.download = `b64sc-${new Date().getTime()}`;
    document.body.appendChild(_linkElement);
    _linkElement.click();
    document.body.removeChild(_linkElement);
  }

  /**
   * Copying an image to the clipboard
   * @requirement UF/FINAL-IMAGE/COPY
   */
  public async copyImage(): Promise<void> {
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
    })(this._imageElement);

    /** Draw image on canvas */
    (function _drawImageOnCanvas(
      _canvasElement: HTMLCanvasElement,
      _imageElement: HTMLImageElement | null,
    ) {
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
    })(_canvasElement, this._imageElement);

    /** Copy image to clipboard */
    (function _copyBlobImageToClipboard(_canvasElement: HTMLCanvasElement) {
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
}

export { HTMLImageController };
