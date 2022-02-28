const express = require('express')
const router = express.Router()
const {getNotes, createNotes, updateNotes, deleteNotes} = require('../controllers/notesController')

// page routes and requests
router.get('/', getNotes)

router.post('/', createNotes)

router.put('/:id', updateNotes)

router.delete('/:id', deleteNotes)

module.exports = router