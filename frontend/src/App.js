import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Container from '@mui/material/Container';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'




function App() {
  return (
    <>
    <Router>
    <div className='container'>
    <Container maxWidth="sm">
<Header />
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

      </Routes>
      </Container>
    </div>
    </Router>
    <ToastContainer/>

    </>
  );
}

export default App;
