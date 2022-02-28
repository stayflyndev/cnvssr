const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const {errorHandler} = require('./middleware/errorMiddleware')
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const PORT = process.env.PORT || 5000;

// to notes AP

const routeNotesApi = require('./routes/notesRoutes')
app.use('/api/notes', routeNotesApi)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
