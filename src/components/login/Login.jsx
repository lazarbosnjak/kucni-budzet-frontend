import { Form, Button, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './login.css'
import { useState } from 'react';
import { login } from '../../apis/auth';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

   const [korisnikLogin, setKorisnikLogin] = useState({
      email: '',
      password: ''
   });
   const [rememberMe, setRememberMe] = useState(false);
   const [showPass, setShowPass] = useState(false);

   const handleLoginInputChange = (e) => {
      let name = e.target.name
      let value = e.target.value

      setKorisnikLogin({
         ...korisnikLogin,
         [name]: value
      })
   }

   const handleFormSubmit = (e) => {
      e.preventDefault(); // Prevent default form submission
      login(korisnikLogin.email, korisnikLogin.password, rememberMe);
   }

   // TODO: - validacija polja

   return (
      <div className='wrapper'>
         <Form className='login-form' onSubmit={(e) => handleFormSubmit(e)}>
            <h1 className='text-center fs-2 mb-3' color='white'>Prijava</h1>

            <Form.Group className='mb-3'>
               <Form.Label>E-mail adresa</Form.Label>
               <Form.Control name='email' type='text' placeholder='primer@email.com' onChange={(e) => handleLoginInputChange(e)} required />
            </Form.Group>
            <Form.Group className='mb-3'>
               <Form.Label>Lozinka</Form.Label>
               <InputGroup>
                  <Form.Control name='password' type={showPass ? 'text' : 'password'} placeholder='Vasa lozinka' onChange={(e) => handleLoginInputChange(e)} required />
                  <InputGroup.Text onClick={() => setShowPass(!showPass)}>{ showPass ? <FaEye /> : <FaEyeSlash />}</InputGroup.Text>
               </InputGroup>
            <Form.Text muted><Link to={'/forgot-password'}>Zaboravili ste lozinku?</Link></Form.Text>
            </Form.Group>
            <Form.Group className='d-flex justify-content-space-between fs-6 mb-3'>
               <Form.Check label="Zapamti me" onChange={() => setRememberMe(!rememberMe)} />
            </Form.Group>
            <Form.Group className='d-flex justify-content-center'>
               <Button variant='success' className='btnForm' type='submit'>Uloguj se</Button>
            </Form.Group>
            <hr />
            <p className='text-center'>Nemate nalog? <Link to={'/registracija'}>Registrujte se</Link></p>
         </Form>
      </div>
   );
}

export default Login;