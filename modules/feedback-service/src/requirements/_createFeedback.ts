/**
 * Sending feedback
 * @requirement UF/FEEDBACK/CREATE
 */
export function _createFeedback(feedbackText: string = ""): Promise<boolean> {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (feedbackText) {
        resolve(true);
      } else {
        reject(false);
      }
    }, 1758);
  });
}
