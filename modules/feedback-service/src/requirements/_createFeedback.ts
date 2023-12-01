/**
 * Sending feedback
 * @requirement UF/FEEDBACK/CREATE
 */
export function _createFeedback(feedbackText: string = ""): Promise<void> {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (feedbackText) {
        resolve();
      } else {
        reject();
      }
    }, 1758);
  });
}
