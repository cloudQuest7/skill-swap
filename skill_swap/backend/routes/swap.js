const express = require('express');
const router = express.Router();
const { requestSwap, getUserSwaps, acceptSwap, rejectSwap, deleteSwap } = require('../controllers/swapController');
const authMiddleware = require('../middleware/authMiddleware');

// Send a swap request
router.post('/request', authMiddleware, requestSwap);

// Get all swap requests for logged-in user
router.get('/', authMiddleware, getUserSwaps);

// Accept swap
router.put('/:id/accept', authMiddleware, acceptSwap);

// Reject swap
router.put('/:id/reject', authMiddleware, rejectSwap);

// Delete unaccepted swap
router.delete('/:id', authMiddleware, deleteSwap);

module.exports = router;
