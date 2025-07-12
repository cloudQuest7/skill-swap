const User = require('../models/User');

// @desc    Update profile photo
// @route   PUT /api/users/photo
// @access  Private
const updateProfilePhoto = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.profilePhoto = req.file.path;
    await user.save();

    res.status(200).json({
      message: 'Profile photo updated',
      profilePhoto: req.file.path,
    });
  } catch (err) {
    console.error('Error updating photo:', err);
    res.status(500).json({ message: 'Server error updating photo' });
  }
};

// @desc    Update profile info (name, location, skills, etc.)
// @route   PUT /api/users/profile
// @access  Private
const updateProfileInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const {
      name,
      location,
      skillsOffered,
      skillsWanted,
      availability,
      profileType,
    } = req.body;

    if (name) user.name = name;
    if (location) user.location = location;
    if (skillsOffered) user.skillsOffered = skillsOffered;
    if (skillsWanted) user.skillsWanted = skillsWanted;
    if (availability) user.availability = availability;
    if (profileType) user.profileType = profileType;

    await user.save();

    res.status(200).json({
      message: 'Profile updated successfully',
      user,
    });
  } catch (err) {
    console.error('Error updating profile info:', err);
    res.status(500).json({ message: 'Server error updating profile info' });
  }
};

module.exports = {
  updateProfilePhoto,
  updateProfileInfo,
};
