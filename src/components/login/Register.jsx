import { Form, Button, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './login.css'
import { useState } from 'react';
import { register } from '../../apis/auth';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {

   const [showPass, setShowPass] = useState(false);
   const [showRepeatPass, setShowRepeatPass] = useState(false);
   const [korisnikRegister, setKorisnikRegister] = useState({
      ime: '',
      prezime: '',
      email: '',
      password: '',
      ponovljeniPassword: ''
   });

   const handleRegisterInputChange = (e) => {
      let name = e.target.name
      let value = e.target.value

      setKorisnikRegister({
         ...korisnikRegister,
         [name]: value
      })
   }

   // TODO: - validacija polja

   return (
      <div className='wrapper'>

         <Form className='login-form'>
            <h1 className='text-center fs-2 mb-3' color='white'>Registracija</h1>
            <Form.Group className='mb-3'>
               <Form.Label>Ime</Form.Label>
               <Form.Control name='ime' type='text' onChange={(e) => handleRegisterInputChange(e)} required />
            </Form.Group>
            <Form.Group className='mb-3'>
               <Form.Label>Prezime</Form.Label>
               <Form.Control name='prezime' type='text' onChange={(e) => handleRegisterInputChange(e)} required />
            </Form.Group>
            <Form.Group className='mb-3'>
               <Form.Label>E-mail adresa</Form.Label>
               <Form.Control name='email' type='text' placeholder='primer@email.com' onChange={(e) => handleRegisterInputChange(e)} required />
            </Form.Group>
            <Form.Group className='mb-3'>
               <Form.Label>Lozinka</Form.Label>
               <InputGroup>
                  <Form.Control name='password' type={showPass ? 'text' : 'password'} placeholder='Vasa lozinka' onChange={(e) => handleRegisterInputChange(e)} required />
                  <InputGroup.Text onClick={() => setShowPass(!showPass)}>{showPass ? <FaEye /> : <FaEyeSlash />}</InputGroup.Text>
               </InputGroup>
            </Form.Group>
            <Form.Group className='mb-3'>
            <Form.Label>Ponovljena lozinka</Form.Label>
               <InputGroup>
                  <Form.Control name='ponovljeniPassword' type={showRepeatPass ? 'text' : 'password'} placeholder='Vasa lozinka' onChange={(e) => handleRegisterInputChange(e)} required />
                  <InputGroup.Text onClick={() => setShowRepeatPass(!showRepeatPass)}>{showRepeatPass ? <FaEye /> : <FaEyeSlash />}</InputGroup.Text>
               </InputGroup>
            </Form.Group> <br />
            <Form.Group className='d-flex justify-content-center mb-3'>
               <Button variant='success' className='btnForm' onClick={() => register(korisnikRegister)} >Registruj se</Button>
            </Form.Group>
            <hr />
            <p className='text-center'>Imate nalog? <Link to={'/login'}>Prijavite se</Link></p>
         </Form>
      </div>
   );
}

export default Register;