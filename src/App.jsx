import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/login/Login'

function App() {

   return (
      <>
         <Router>
            <Header />
         
         <Routes>
            <Route path='/' />
            <Route path='/login' element={<Login />} />
         </Routes>
         </Router>
      </>
   )
}

export default App
