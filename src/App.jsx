import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/login/Login'
import Register from './components/login/Register'

function App() {

   if (window.localStorage["jwt"] || window.sessionStorage["jwt"])
   {return (
      <>
         <Router>
            <Header />
         
         <Routes>
            <Route path='/' />
            <Route path='/login' element={<Navigate replace to={'/'} />} />
            <Route path='/registracija' element={<Navigate replace to={'/'} />} />
         </Routes>
         </Router>
      </>
   )}
   else {
      return (
      <>
         <Router>
            <Header />
         
         <Routes>
            <Route path='/' element={<Navigate replace to={'/login'} />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/registracija' element={<Register />} />
         </Routes>
         </Router>
      </>
      )
   }
}

export default App
