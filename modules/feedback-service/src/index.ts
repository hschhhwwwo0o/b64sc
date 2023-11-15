class FeedbackCreator {
  /**
   * Sending feedback
   * @requirement UF/FEEDBACK/CREATE
   */
  public async createFeedback(feedbackText: string = ""): Promise<void> {
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
}

export { FeedbackCreator };
