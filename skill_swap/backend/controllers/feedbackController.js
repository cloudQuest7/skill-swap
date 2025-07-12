// controllers/feedbackController.js
const Feedback = require('../models/Feedback');

exports.submitFeedback = async (req, res) => {
  try {
    const { swapId, toUser, rating, comment } = req.body;

    const feedback = await Feedback.create({
      swapId,
      fromUser: req.user.id,
      toUser,
      rating,
      comment,
    });

    res.status(201).json({ message: 'Feedback submitted', feedback });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to submit feedback' });
  }
};

exports.getFeedbackForUser = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ toUser: req.params.userId }).populate('fromUser', 'name');
    res.json(feedbacks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch feedback' });
  }
};
