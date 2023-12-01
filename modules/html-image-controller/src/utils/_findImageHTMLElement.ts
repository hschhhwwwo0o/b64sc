export function _findImageHTMLElement(imageElementID: string = "") {
  const imageElement: HTMLImageElement | null = document.querySelector(
    `#${imageElementID.replace("#", "")}`,
  );
  if (imageElement === null) {
    console.warn(
      `The element with the identifier ${imageElementID} was not found`,
    );
  }
  return imageElement;
}
