
import  {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';


function Header() {
  const classes = useStyles();

  return (
<div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.navigation}>
        <Toolbar>
        <Link to='/'>Cnvssr Notes</Link>
        <Link to='/login'>
            <FaSignInAlt/> Login
        </Link>
        <Link to='/register'>
            <FaUser/> Register
        </Link>

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