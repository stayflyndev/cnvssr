import React from 'react'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { FormControl, StepContext } from '@mui/material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import {createNote} from '../features/notes/notesSlice'


function NotesForm() {
    const classes = useStyles();

    const [text, setText] = useState('');

    const dispatch = useDispatch()

    const onSubmit =(e) => {
      e.preventDefault()
      dispatch(createNote({text}))
      setText('')
  }
  

  return (
      <div>
    <div>notes</div>
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        <Grid xs={8} className={classes.input}>
        <form onSubmit={onSubmit}>
          
      <div className={classes.space_input}>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Write Note</InputLabel>
        <OutlinedInput
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          
          name='text'
        />
      </FormControl>
      </div>
     
      
      <Button variant="contained" type="submit">Add Note</Button>
    </form>
        </Grid>
      </Grid>
      </Box>
      </div>
      </div>

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
      padding: '80px 30px',
    },
    space_input:{
      margin: '40px'
    }
  });

export default NotesForm