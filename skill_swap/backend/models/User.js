const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: { type: String },
  skillsOffered: [{ type: String }],
  skillsWanted: [{ type: String }],
  availability: { type: String },
  profileType: { type: String, enum: ['Public', 'Private'], default: 'Public' },
  profilePhoto: { type: String }, 
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
