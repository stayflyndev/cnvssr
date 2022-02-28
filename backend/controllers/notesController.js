const asyncHandler = require('express-async-handler')

// functions for CRUD methods on the notesRoute.js
//route GET /api/notes

//get notes GET
  const getNotes = asycncHandler (async (req, res) => {
    res.status(200).json({
      message: 'getting notes...'
    })
  })
//create notes POST
  const createNotes = asycncHandler (async (req, res) => {
      //check if there is a note
    if(!req.body.text){
    res.status(400)
    throw new Error('Please add a note')
}
  })
// update notes PUT
  const updateNotes = asycncHandler( async (req, res) => {
    res.status(200).json({
      message: `update notes... ${req.params.id}`
    })
  })

  //delete notes DELETE
  const deleteNotes = asycncHandler( async (req, res) => {
    res.status(200).json({
      message: `delete notes... ${req.params.id}`
    })
  })

  module.exports = {
      getNotes, createNotes, updateNotes, deleteNotes
  }