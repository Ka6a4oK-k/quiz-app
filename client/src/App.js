import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Login from './pages/Login.jsx'
import Registration from './pages/Registration.jsx'
import NewQuiz from './pages/NewQuiz.jsx'
import './app.css'
import './styles/content.css'
import axios from 'axios';

function App() {

  const [isAuthorized, setIsAuthorized] = useState(false)

  const setAuth = (bool) => {
    setIsAuthorized(bool)
  }

  useEffect(() => { 
    const token =  localStorage.getItem('token')
    if (!token) {
      console.log("no token");
      return setAuth(false)
    }
    try {
      const sendToken = async () => {
        await axios.get('http://localhost:3000/verifyToken', { headers: { Authorization: token } })
          .then(res => {(res.data === true) ? setAuth(true) : setAuth(false)})
      }
      sendToken()
    } catch (err) {
      console.error(err.message)
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar setAuth={setAuth} isAuthorized={isAuthorized} />
        <div className='content'>
          <Routes>
            <Route path='/login'  element={isAuthorized ? <Navigate to='/createQuiz' /> : <Login setAuth={setAuth} />} />
            <Route path='/registration' element={isAuthorized ? <Navigate to='/createQuiz' /> : <Registration />} />
            <Route path='/createQuiz' element={isAuthorized ? <NewQuiz /> : <Navigate to='/login' />}></Route>
            <Route path='/*' element={<Navigate to='/login' />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
