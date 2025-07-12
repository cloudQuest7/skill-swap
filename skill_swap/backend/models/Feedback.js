// models/Feedback.js
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  swapId: { type: mongoose.Schema.Types.ObjectId, ref: 'Swap', required: true },
  fromUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  toUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, min: 1, max: 5 },
  comment: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Feedback', feedbackSchema);
