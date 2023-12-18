/** Create blob */
export async function _getBlobImage(
  _canvasElement: HTMLCanvasElement,
): Promise<Blob> {
  const blob: Blob | PromiseLike<Blob> | null = await new Promise((resolve) =>
    _canvasElement.toBlob(resolve),
  );
  return blob || new Blob();
}
