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
import {login, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


function Login() {
const classes = useStyles();

const [formData, setFormData] = useState({
 email: '',
  password: '',
})

const { email, password} = formData

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
  dispatch(reset())
}, [user, isError, isSuccess, message, navigate, dispatch])



const handleChange = (e) =>{
//use the input fields
const formdata = (prevState) => ({
    ...prevState, [e.target.name]: e.target.value
  })
setFormData (formdata)
}

  
//submit form
const onSubmit = (e) =>{
  e.preventDefault()
  const userData = {
    email, 
    password
  }
  dispatch(login(userData))
}


  return (
    <>
    <div>
      <div className={classes.root}>
      Please Login
      </div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        <Grid xs={8} className={classes.input}>
        <form>
          
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
      
      <Button variant="contained" onClick={onSubmit}>Login</Button>
    </form>
        </Grid>
      </Grid>
      </Box>
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

export default Login