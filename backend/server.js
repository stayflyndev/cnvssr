const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
app.use(express.json())
app.use(express.urlencoded({extended: false}))
const path = require('path')

const PORT = process.env.PORT || 5000;

//connect to DB
connectDB()
// to notes API

const routeNotesApi = require('./routes/notesRoutes')
const routeUserApi = require('./routes/userRoutes')


app.use('/api/notes', routeNotesApi)
app.use('/api/users', routeUserApi)

//Serve FRONTEND
if(process.env.NODE_ENV === 'production'){
app.use(express.static(path.join(__dirname, '../frontend/build')))

//path to frontend
const loadIndexHtml = (req,res) => {
res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'))
}

app.get('*', loadIndexHtml)
} 

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
