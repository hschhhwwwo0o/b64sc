/** Create image HTML element from base64 string */
export async function _createImageElement(
  dataUrlBase64: string,
): Promise<HTMLImageElement> {
  const image = new Image();
  image.setAttribute("crossorigin", "anonymous");
  image.src = dataUrlBase64;
  await image.decode();
  return image;
}
