const express = require('express')
const router = express.Router()
const {getNotes, createNotes, updateNotes, deleteNotes} = require('../controllers/notesController')

const {protect} = require('../middleware/authMiddleware')

// page routes and requests combined
// http://localhost:5000/api/notes/
router.route('/').get(protect, getNotes).post(protect, createNotes)
// http://localhost:5000/api/notes/id (noteID)
router.route('/:id').delete(protect, deleteNotes).put(protect, updateNotes)


module.exports = router