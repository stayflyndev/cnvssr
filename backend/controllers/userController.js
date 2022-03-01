// const asyncHandler = require('express-async-handler')
// const Note = require('../model/notesModel')
// functions for CRUD methods on the userRoute.js

//create user
// POST
//  /api/users
 const createUser =  (req, res) => {
     
  res.json({message: 'user registered'})

  }

  // authenticate user
  // POST
  // /api/users/login
  const loginUser =  (req, res) => {
    
res.json({message: 'user logged in '})

}

//create user
// GET
// /api/users/me
const getUser =  (req, res) => {
  
res.json({message: 'user information'})

}

  module.exports = {createUser, loginUser, getUser}