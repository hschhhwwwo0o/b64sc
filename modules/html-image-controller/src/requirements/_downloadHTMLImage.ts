/**
 * Download image
 * @requirement UF/FINAL-IMAGE/DOWNLOAD
 */
export function _downloadHTMLImage(src: string = "") {
  const _linkElement = document.createElement("a");
  _linkElement.href = src;
  _linkElement.download = `b64sc-${new Date().getTime()}`;
  document.body.appendChild(_linkElement);
  _linkElement.click();
  document.body.removeChild(_linkElement);
}
