const express = require('express')
const router = express.Router()
const { createUser, loginUser, getUser } = require('../controllers/userController')

const {protect} = require('../middleware/authMiddleware')

// create user, login, display user on this route

// http://localhost:5000/api/users/
router.post('/', createUser)
// http://localhost:5000/api/users/login
router.post('/login', loginUser)
http://localhost:5000/api/users/me/
router.get('/me', protect, getUser)


module.exports = router