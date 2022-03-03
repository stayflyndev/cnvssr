import React from 'react'
import { makeStyles } from '@mui/styles';

function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.container}>  
      <div className={classes.loadingSpinner}></div>

 </div>
  )
}

export default Spinner

const useStyles = makeStyles({
    loadingSpinner: {

    },
    container: {
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