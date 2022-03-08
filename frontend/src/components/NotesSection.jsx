import React from 'react'
import { makeStyles } from '@mui/styles';

function NotesSection() {
    const classes = useStyles();

  return (
    <div>NotesSection</div>
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
    notesItem:{
      background: 'red',
      height: 45,
      padding: '300px'
    }
  });

export default NotesSection