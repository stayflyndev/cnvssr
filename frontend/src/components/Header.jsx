
import  {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'


function Header() {
  const classes = useStyles();
  const navigate = useNavigate()
  const dispatch = useDispatch()
const {user}= useSelector((state) => state.auth)


const onLogout =()=>{
  dispatch(logout())
  dispatch(reset())
  navigate('/')

}
{}
  return (
<div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.navigation}>
        <Toolbar>
        <Link to='/'>Cnvssr Notes</Link>
        <ul>
          {user ? (
              <li>
                <Button onClick={onLogout}>Logout</Button>
                <FaSignInAlt/> 
              </li>
          ) :(
            <>
            <li>
          <Link to='/login'>
            <FaSignInAlt/> Login
        </Link>
          </li>
          <li>
          <Link to='/register'>
            <FaUser/> Register
        </Link>
          </li>
            </>
          )}
          
        </ul>
       
       

        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}

const useStyles = makeStyles({
  navigation: {
    background: 'linear-gradient(45deg, #FE6B8B 60%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '48 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '50px 30px',
  }

});

export default Header