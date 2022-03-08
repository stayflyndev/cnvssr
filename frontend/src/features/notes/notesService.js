import axios from "axios";
const API_URL = 'api/notes/'

//create notes
const createNote = async (noteData, token) => {
    const config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, noteData, config)
    return response.data
}

//get notes
const getNotes = async (token) => {
    const config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    return response.data
}

const noteService = {
    createNote,
    getNotes
}

export default noteService