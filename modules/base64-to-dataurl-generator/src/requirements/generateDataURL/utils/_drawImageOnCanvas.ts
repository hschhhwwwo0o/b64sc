export function _drawImageOnCanvas(
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
}
