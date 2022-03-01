const express = require('express')
const router = express.Router()
const { createUser, loginUser, getUser } = require('../controllers/userController')

// create user on this route
// POST
router.post('/', createUser)
router.post('/login', loginUser)
router.get('/me', getUser)


module.exports = router