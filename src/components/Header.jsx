import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <>
         <Navbar expand style={{backgroundColor: "#001220"}}>
            <Nav>
               <Nav.Link as={Link} to={'/login'} style={{color: 'white'}}>
                  Login
               </Nav.Link>
            </Nav>
         </Navbar>
      </>);
}

export default Header;