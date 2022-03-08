import React from 'react'
import Button from '../components/Header'
import { makeStyles } from '@mui/styles';
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import NotesForm from '../components/NotesForm'
import NoteItem  from '../components/NoteItem';
import {getNotes, reset} from '../features/notes/notesSlice'
import NotesSection from '../components/NotesSection';

function Dashboard() {
  const classes = useStyles();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {notes, isLoading, isError, message} = useSelector((state) =>state.notes )

  useEffect(() => {
if(isError){
  console.log(message)
}

    if(!user) {
      navigate('/login')
    }
    dispatch(getNotes())

return () => {
  dispatch(reset())
}

  }, [user, navigate, isError, message, dispatch])

  return (

  <div>
    <div className={classes.root}>
      
      Welcome {user && user.name}
    <NotesForm/>
    {/* render out notes */}
    <div>
      {notes.length > 0 ? (<div>
        {notes.map((note) => (
     <NoteItem key={note._id} note={note}/>

        ) )}
        </div>
        ) : (<h3> There are no notes</h3>)}
    </div>
    
 
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
    height:500,
    padding: '50px 30px',
  },
  notesItem:{
    background: 'red',
    height: 45,
    padding: '300px'
  }
});

export default Dashboard