/** Create canvas */
export function _createCanvasElement(_imageElement: HTMLImageElement | null) {
  const _canvas = document.createElement("canvas");
  if (_imageElement) {
    _canvas.width = _imageElement.width;
    _canvas.height = _imageElement.height;
  }
  return _canvas;
}
