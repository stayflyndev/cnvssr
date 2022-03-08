const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')


const protect = asyncHandler(async(req, res, next) => {
    let token
    //from auth header
    
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            //getting the token from the header
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select('-password')
            next()
        }catch(error){
            console.log(error)
            res.status(401)
            throw new Error("Not Authorized")

        }
    }
    if(!token){
        res.status(401)
        throw new Error("there is no token")
    }

})

module.exports = {protect}