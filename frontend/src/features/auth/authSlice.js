import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService';

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    //if there is a user, then use it, else null
     user: user ? user: null,
     isError: false,
     isSuccess: false,
     isLoading: false,
     message: '',
    }
    //register user
    const asyncthunkreg = async(user, thunkAPI)=>{
        try{
            return await authService.register(user)
        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())

            //send error message
            return thunkAPI.rejectWithValue(message)
        }
    }
    export const register = createAsyncThunk('auth/register', asyncthunkreg)

       //login user
       const asyncthunklogin = async(user, thunkAPI)=>{
        try{
            return await authService.login(user)
        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())

            //send error message
            return thunkAPI.rejectWithValue(message)
        }
    }
    export const login = createAsyncThunk('auth/login', asyncthunklogin)


    //logout
    export const logout = createAsyncThunk('auth/logout', async() => {
        await authService.logout()
    }) 


    const resetStateValues = (state) =>{
        state.isLoading = false
        state.isError = false
    }

    export const authSlice = createSlice({
      
        name: 'auth',
        initialState,
        reducers: {
            //reducer function
            reset: (state) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = false
                state.message = ''
              },
        },
        extraReducers: (builder) => {
            //what to do with the state when the register is pending, fullfilled, and rejected
            builder
            .addCase(register.pending, (state) => {state.isLoading = true})
            //has the usr
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false 
                state.isSuccess=true
                state.user = action.payload})
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message= action.payload
                state.user = null
            })
            .addCase(login.pending, (state) => {state.isLoading = true})
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false 
                state.isSuccess=true
                state.user = action.payload})
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message= action.payload
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user  = null
            })
        }
    })

    export const {reset} = authSlice.actions
    export default authSlice.reducer