import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
   return (
      <div className='wrapper'>
         <Form className='login-form'>
            <h1 className='text-center fs-2 mb-3' color='white'>Prijava</h1>
            <Form.Group className='mb-3'>
               <Form.Label>E-mail adresa</Form.Label>
               <Form.Control type='text' placeholder='primer@email.com' />
            </Form.Group>
            <Form.Group className='mb-3'>
               <Form.Label>Lozinka</Form.Label>
               <Form.Control type='password' placeholder='Vasa lozinka' className='passwordGroup'/>
               <Form.Text muted><Link to={'/forgot-password'}>Zaboravili ste lozinku?</Link></Form.Text>
            </Form.Group>
            <Form.Group className='d-flex justify-content-space-between fs-6 mb-3'>
               <Form.Check label="Zapamti me" />
            </Form.Group>
            <Form.Group className='d-flex justify-content-center'>
               <Button variant='success' className='btnForm'>Uloguj se</Button>
            </Form.Group>
            <hr />
            <p className='text-center'>Nemate nalog? <Link to={'/register'}>Registrujte se</Link></p>
         </Form>
      </div>
   );
}

export default Login;