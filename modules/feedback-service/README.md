# Module @feedback-service

The module is designed to send feedback.

```ts
const feedbackCreator = new FeedbackCreator();

/**
 * Sending feedback
 * @requirement UF/FEEDBACK/CREATE
 */
await feedbackCreator.createFeedback("feedback text");
```
