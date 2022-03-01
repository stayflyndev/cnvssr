const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const PORT = process.env.PORT || 5000;

//connect to DB
connectDB()
// to notes AP

const routeNotesApi = require('./routes/notesRoutes')
const routeUserApi = require('./routes/userRoutes')

app.use('/api/notes', routeNotesApi)
app.use('/api/users', routeUserApi)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
