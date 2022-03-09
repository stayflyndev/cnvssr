import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import noteService from './notesService'


// const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    //if there is a user, then use it, else null
     notes: [],
     isError: false,
     isSuccess: false,
     isLoading: false,
     message: ''
    
    }

     //create new note and take in the note data
     const asyncthunkCreateNote = async(noteData, thunkAPI)=>{
      try{
          const token = thunkAPI.getState().auth.user.token
        return await noteService.createNote(noteData, token)
      } catch(error) {
        const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())

        //send error message
        return thunkAPI.rejectWithValue(message)
      }
      
    }
    export const createNote = createAsyncThunk('notes/create', asyncthunkCreateNote)


      //DELETE NOTE
      const asyncthunkDeleteNote = async(id, thunkAPI)=>{
        try{
            const token = thunkAPI.getState().auth.user.token
          return await noteService.deleteNote(id, token)
        } catch(error) {
          const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
  
          //send error message
          return thunkAPI.rejectWithValue(message)
        }
        
      }
      export const deleteNote = createAsyncThunk('notes/delete', asyncthunkDeleteNote)


        //GET NOTES
        const asyncthunkGetNotes = async(_, thunkAPI)=>{
            try{
                const token = thunkAPI.getState().auth.user.token
              return await noteService.getNotes(token)
            } catch(error) {
              const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
      
              //send error message
              return thunkAPI.rejectWithValue(message)
            }
            
          }
      
          export const getNotes = createAsyncThunk('notes/getAll', asyncthunkGetNotes)



    export const notesSlice = createSlice({
    //create a new 
        name: 'note',
        initialState,
        reducers: {
            //reducer function
            reset: (state) => initialState
        },
        extraReducers: (builder) => {
            //what to do with the state when the register is pending, fullfilled, and rejected
            builder
            .addCase(createNote.pending, (state) => {state.isLoading = true})
            //has the usr
            .addCase(createNote.fulfilled, (state, action) => {
                state.isLoading = false 
                state.isSuccess=true
                state.notes.push(action.payload)
            })
            .addCase(createNote.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message= action.payload
            })
            .addCase(getNotes.pending, (state) => {state.isLoading = true})
            .addCase(getNotes.fulfilled, (state, action) => {
                state.isLoading = false 
                state.isSuccess=true
                state.notes = action.payload
            })
            .addCase(getNotes.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message= action.payload
            })
            .addCase(deleteNote.pending, (state) => {state.isLoading = true})
            .addCase(deleteNote.fulfilled, (state, action) => {
                state.isLoading = false 
                state.isSuccess=true
                state.notes = state.notes.filter
                ((note) => note._id !== action.payload.id)
            })
            .addCase(deleteNote.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message= action.payload
            })
        }
    })

    export const {reset} = notesSlice.actions
    export default notesSlice.reducer