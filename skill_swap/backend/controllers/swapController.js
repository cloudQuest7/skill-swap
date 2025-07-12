const Swap = require('../models/Swap');

const requestSwap = async (req, res) => {
  try {
    const { toUser, skillOffered, skillRequested } = req.body;
    const fromUser = req.user.id;

    const newSwap = await Swap.create({
      fromUser,
      toUser,
      skillOffered,
      skillRequested,
      status: 'pending'
    });

    res.status(201).json(newSwap);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

const getUserSwaps = async (req, res) => {
  try {
    const userId = req.user.id;

    const swaps = await Swap.find({
      $or: [{ fromUser: userId }, { toUser: userId }]
    }).populate('fromUser toUser', 'name');

    res.status(200).json(swaps);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

const acceptSwap = async (req, res) => {
  try {
    const swap = await Swap.findById(req.params.id);
    if (!swap) return res.status(404).json({ error: 'Swap not found' });

    swap.status = 'accepted';
    await swap.save();

    res.status(200).json(swap);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

const rejectSwap = async (req, res) => {
  try {
    const swap = await Swap.findById(req.params.id);
    if (!swap) return res.status(404).json({ error: 'Swap not found' });

    swap.status = 'rejected';
    await swap.save();

    res.status(200).json(swap);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

const deleteSwap = async (req, res) => {
  try {
    const swap = await Swap.findById(req.params.id);
    if (!swap) return res.status(404).json({ error: 'Swap not found' });

    if (swap.status !== 'pending')
      return res.status(403).json({ error: 'Only pending swaps can be deleted' });

    await Swap.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Swap deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = {
  requestSwap,
  getUserSwaps,
  acceptSwap,
  rejectSwap,
  deleteSwap
};