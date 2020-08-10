const things = require('../controllers/thing.js');
const express = require('express')
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Create a new Note
router.post('/', auth, multer, things.create)

// Retrieve all Notes
router.get('/', auth, things.findAll);

// Retrieve a single Note with noteId
router.get('/:id', auth, things.findOne);

// Update a Note with noteId
router.put('/:id', auth, multer, things.update);

// Delete a Note with noteId
router.delete('/:id', auth, things.delete);

module.exports = router;