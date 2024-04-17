import { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logout } from '../apis/auth';

const Header = () => {

   const [isJwtPresent, setIsJwtPresent] = useState(false);

   const checkForJwt = () => {
      if (window.localStorage["jwt"]) setIsJwtPresent(true);
      else if (window.sessionStorage["jwt"]) setIsJwtPresent(true);
      else setIsJwtPresent(false)
   }

   useEffect(() => {
      checkForJwt()
   }, []);

   return (
      <>
         <Navbar expand style={{backgroundColor: "#001220"}}>
            <Nav>
               <Nav.Link as={Link} to={'/login'} style={{color: 'white'}} hidden={isJwtPresent}>
                  Login
               </Nav.Link>
               <Nav.Link style={{color: 'white'}} onClick={() => logout()} hidden={!isJwtPresent}>
                  Logout
               </Nav.Link>
            </Nav>
         </Navbar>
      </>);
}

export default Header;