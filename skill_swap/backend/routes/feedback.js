// routes/feedback.js
const express = require('express');
const router = express.Router();
const { submitFeedback, getFeedbackForUser } = require('../controllers/feedbackController');
const protect = require('../middleware/authMiddleware');

router.post('/', protect, submitFeedback);
router.get('/:userId', getFeedbackForUser);

module.exports = router;
