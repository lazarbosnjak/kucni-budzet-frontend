import { Form, Button, Tabs, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './login.css'
import { useState } from 'react';
import { login } from './auth';

const Login = () => {

   const [activeTab, setActiveTab] = useState(1);
   const [korisnikLogin, setKorisnikLogin] = useState({
      email: '',
      password: ''
   });
   const [korisnikRegister, setKorisnikRegister] = useState({
      ime: '',
      prezime: '',
      email: '',
      password: '',
      ponovljeniPassword: ''
   });
   const [rememberMe, setRememberMe] = useState(false);

   const handleLoginInputChange = (e) => {
      let name = e.target.name
      let value = e.target.value

      setKorisnikLogin({
         ...korisnikLogin,
         [name]: value
      })
   }

   const handleRegisterInputChange = (e) => {
      let name = e.target.name
      let value = e.target.value

      setKorisnikRegister({
         ...korisnikRegister,
         [name]: value
      })
   }

   console.log(rememberMe);

   return (
      <div className='wrapper'>
         <Tabs activeKey={activeTab}>
            <Tab eventKey={1}>
         <Form className='login-form'>
            <h1 className='text-center fs-2 mb-3' color='white'>Prijava</h1>
            <Form.Group className='mb-3'>
               <Form.Label>E-mail adresa</Form.Label>
               <Form.Control name='email' type='text' placeholder='primer@email.com' onChange={(e) => handleLoginInputChange(e)} required/>
            </Form.Group>
            <Form.Group className='mb-3'>
               <Form.Label>Lozinka</Form.Label>
               <Form.Control name='password' type='password' placeholder='Vasa lozinka'  onChange={(e) => handleLoginInputChange(e)} required/>
               <Form.Text muted><Link to={'/forgot-password'}>Zaboravili ste lozinku?</Link></Form.Text>
            </Form.Group>
            <Form.Group className='d-flex justify-content-space-between fs-6 mb-3'>
               <Form.Check label="Zapamti me" onChange={() => setRememberMe(!rememberMe)}/>
            </Form.Group>
            <Form.Group className='d-flex justify-content-center'>
               <Button variant='success' className='btnForm' onClick={() => login(korisnikLogin.email, korisnikLogin.password, rememberMe)}>Uloguj se</Button>
            </Form.Group>
            <hr />
            <p className='text-center'>Nemate nalog? <Link onClick={() => setActiveTab(2)}>Registrujte se</Link></p>
         </Form>
         </Tab>
         
         
         <Tab eventKey={2}>
         <Form className='login-form'>
            <h1 className='text-center fs-2 mb-3' color='white'>Registracija</h1>
            <Form.Group className='mb-3'>
               <Form.Label>Ime</Form.Label>
               <Form.Control name='ime' type='text' onChange={(e) => handleRegisterInputChange(e)} required/>
            </Form.Group>
            <Form.Group className='mb-3'>
               <Form.Label>Prezime</Form.Label>
               <Form.Control name='prezime' type='text' onChange={(e) => handleRegisterInputChange(e)} required/>
            </Form.Group>
            <Form.Group className='mb-3'>
               <Form.Label>E-mail adresa</Form.Label>
               <Form.Control name='email' type='text' placeholder='primer@email.com' onChange={(e) => handleRegisterInputChange(e)} required/>
            </Form.Group>
            <Form.Group className='mb-3'>
               <Form.Label>Lozinka</Form.Label>
               <Form.Control name='password' type='password' className='passwordGroup' onChange={(e) => handleRegisterInputChange(e)} required/>
            </Form.Group>
            <Form.Group className='mb-3'>
               <Form.Label>Ponovljena lozinka</Form.Label>
               <Form.Control name='ponovljeniPassword' type='password' className='passwordGroup' onChange={(e) => handleRegisterInputChange(e)} required/>
            </Form.Group> <br />
            <Form.Group className='d-flex justify-content-center mb-3'>
               <Button variant='success' className='btnForm'>Registruj se</Button>
            </Form.Group>
            <hr />
            <p className='text-center'>Imate nalog? <Link onClick={() => setActiveTab(1)}>Prijavite se</Link></p>
         </Form>
         </Tab>
         </Tabs>
      </div>
   );
}

export default Login;