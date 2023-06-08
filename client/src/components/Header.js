import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { allUsers } from '../utils/queries';

const brandStyle = {
  style: {
    fontSize: '24pt'
  }
}

const linkStyles = {

  style: {
    fontSize: '18pt',
  },
  classList: 'text-light'
}

function Header() {

  const {loading, data } = useQuery(allUsers);
  const users = data?.users || [];
  console.log(users)
  return (
    <>
   

   
       <Navbar bg="dark" variant="dark" className='col-12 dark' style={{
        height: '5vh',
        backgroundColor: '#111 !important '
      }}>
        <Container className='justify-content-between col-lg-10 col-xl-8  '>
          <Navbar.Brand href="/" className='' style={brandStyle.style}>Florida Springs Deep Dive</Navbar.Brand>
          <Nav className="d-flex col-4 justify-content-between">

            <Link to="/aboutme" style={linkStyles.style} className={linkStyles.classList}>About mes</Link>
            <Link to="/contact" style={linkStyles.style} className={linkStyles.classList}>Contact</Link>
            <Link to="/portfolio" style={linkStyles.style} className={linkStyles.classList}>Portfolio</Link>
            <Link to="/resume" style={linkStyles.style} className={linkStyles.classList}>Resume</Link>


          </Nav>
        </Container>
      </Navbar>





      <br /> 

    </>
  );
}

export default Header;