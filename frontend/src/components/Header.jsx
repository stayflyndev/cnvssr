
import  {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
  );
}
