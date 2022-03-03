import React from 'react'
import {useState, useEffect} from 'react'
import { FormControl } from '@mui/material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
const classes = useStyles();

const [formData, setFormData] = useState({
  name: '',
  email: '',
  password: '',
  confirmpassword: ''

})

const {name, email, password, confirmpassword} = formData


const navigate = useNavigate()
const dispatch = useDispatch()

const { user, isLoading, isError, isSuccess, message} = useSelector((state)=> state.auth)

useEffect(() =>
{
  if(isError) {
    toast.error(message)
  }
  if(isSuccess || user){
    navigate('/')
  }
  dispatch(reset)
}, [user, isError, isSuccess, message, navigate, dispatch])


const handleChange = (e) =>{
//use the input fields
// const formInputValue = (prevState) => ({
//     ...prevState, [e.target.name]: e.target.value
//   })
setFormData ((prevState) => ({
  ...prevState, [e.target.name]: e.target.value
}))
}

//submit form
const onSubmit = (e) =>{
  console.log("hh")
  e.prevent.Default()
  // if(password != confirmpassword){
  //   toast.error('Password doesnt match')
  // }else{
  //   const userData = {
  //     name,
  //     email,
  //     password
  // }
  // dispatch(register(userData))
}





  return (
    <>
    <div>
      <div className={classes.root}>
      Please Create An Accont
      </div>
      
        <form onSubmit={onSubmit}>
          <div className={classes.space_input}>
        <FormControl >
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput
        type='text'
          id="name"
          value={name}
          onChange={handleChange}
          label="Name"
          name='name'
        />
      </FormControl>
      </div>
      <div className={classes.space_input}>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Email</InputLabel>
        <OutlinedInput
        type="email"
          id="email"
          value={email}
          onChange={handleChange}
          label="Email"
          name='email'
        />
      </FormControl>
      </div>
      <div className={classes.space_input}>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Password</InputLabel>
        <OutlinedInput
        type='password'
          id="password"
          value={password}
          onChange={handleChange}
          label="password"
          name='password'
        />
      </FormControl>
      </div>
      <div className={classes.space_input}>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Confirm Password</InputLabel>
        <OutlinedInput
        type="password"
          id="confirmpassword"
          value={confirmpassword}
          onChange={handleChange}
          label="Confirm Password"
          name='confirmpassword'
        />
      </FormControl>
      </div>
      <Button variant="contained" type='submit'>Submit</Button>
    </form>
        
    </div>
    </>
  )
}

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '50px 30px',
  },
  input: {
    padding: '50px 30px',
  },
  space_input:{
    margin: '20px'
  }
});

export default Register