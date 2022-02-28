const asyncHandler = require('express-async-handler')
const Note = require('../model/notesModel')
// functions for CRUD methods on the notesRoute.js
//route GET /api/notes

//get notes GET
  const getNotes = asyncHandler (async (req, res) => {
    const notes = await Note.find()

    res.status(200).json(notes)
  })
//create notes POST

  const createNotes = asyncHandler (async (req, res) => {
      //check if there is a note
    if(!req.body.text){
    res.status(400)
    throw new Error('Please add a note')
}

const note = await Note.create({
    text: req.body.text
})
res.status(200).json(note)
  })


// update notes PUT
  const updateNotes = asyncHandler( async (req, res) => {
      const note = await Note.findById(req.params.id)
      if(!note){
          res.status(400)
          throw new Error("Note not found")
      }
      const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedNote)
  })

  //delete notes DELETE
  const deleteNotes = asyncHandler( async (req, res) => {
    res.status(200).json({
      message: `delete notes... ${req.params.id}`
    })
  })

  module.exports = {
      getNotes, createNotes, updateNotes, deleteNotes
  }