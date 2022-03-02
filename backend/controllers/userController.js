const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')
// functions for CRUD methods on the userRoute.js

//create user
// POST
//  /api/users
 const createUser =  asyncHandler(async(req, res) => {

  const {name, email, password} = req.body

//check if fields are created
    if(!name || !email || !password){
      res.status(400)
      throw new Error("Fill out the fields")
    }

  //check if user exist from the User model
  const userExists = await User.findOne({email})
  if(userExists){
    res.status(400)
    throw new Error('User Already Exist')
  }

  //hash the password
  const salt = await bcrypt.genSalt(10)
  const hashedpw = await bcrypt.hash(password, salt)

  const user = await User.create({
    name,
    email, 
    password: hashedpw
  })

  if(user){
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)

    })
  } else {
    res.status(400)
    throw new Error("cant create user")
  }

  })

  // authenticate user
  // POST
  // /api/users/login
  const loginUser =  asyncHandler(async(req, res) => {

  const {email, password} =req.body
  //checking email
  const user = await User.findOne({email})
  //checks the hashed pw in the db matches the entered pw
  if(user && (await bcrypt.compare(password, user.password)))  {
  res.json({
    _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
  })
} else {
  res.status(400)
  throw new Error ("Invalid Login")
}
})

//create user
// GET
// /api/users/me
// http://localhost:5000/api/users/me/
const getUser = asyncHandler(async (req, res) => {
  const {_id, name, email} = await User.findById(req.user.id)
  res.status(200).json({
    id: _id,
    name,
    email
  })

})

//token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}

  module.exports = {createUser, loginUser, getUser}