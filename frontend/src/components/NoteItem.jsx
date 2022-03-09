import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useDispatch} from 'react-redux'
import {deleteNote} from '../features/notes/notesSlice'


function NoteItem({note}) {
    const dispatch = useDispatch()

  return (
    <div>
        <div>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {new Date(note.createdAt).toLocaleString('en-US')}
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {note.text}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => dispatch(deleteNote(note._id))}>Delete Note</Button>
      </CardActions>
    </Card>
           
        </div>
       
    </div>
  )
}




export default NoteItem