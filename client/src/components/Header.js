import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



const brandStyle = {
  style: {
    fontSize: '28pt'
    
  }
}


function Header() {







  return (
    <>



      <Navbar variant="dark" className='col-12' style={{
        height: '7vh',
        backgroundColor: '#111'
      }}>
        <Container className='justify-content-between col-lg-10 col-xl-8 mb-0 '>
          <Navbar.Brand href="/" className='header col-12 text-center' style={brandStyle.style}>Florida Springs Deep Dive</Navbar.Brand>
          <Nav className="d-flex col-2 justify-content-around ">

           



          </Nav>
        </Container>
      </Navbar>




    </>
  );


}

export default Header;