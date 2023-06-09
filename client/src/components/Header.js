import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { allUsers } from '../utils/queries';
import Auth from '../utils/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


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

  const loggedIn = Auth.loggedIn()

  const { loading, data } = useQuery(allUsers);
  const users = data?.users || [];
  console.log(users);




  console.log('logged in?', Auth.loggedIn())
  return (
    <>



      <Navbar variant="dark" className='col-12' style={{
        height: '7vh',
        backgroundColor: '#111'
      }}>
        <Container className='justify-content-between col-lg-10 col-xl-8 mb-0 '>
          <Navbar.Brand href="/" className='' style={brandStyle.style}>Florida Springs Deep Dive</Navbar.Brand>
          <Nav className="d-flex col-2 justify-content-around ">

            {Auth.getProfile() ? (

              <>


                <Link to="/profile" style={linkStyles.style} className={linkStyles.classList}>
                  <FontAwesomeIcon icon={faUser} style={{ color: 'white', height: '100%' }} className='mr-3' />
                </Link>

                <Link to="/search" style={linkStyles.style} className={linkStyles.classList}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'white', height: '100%' }} className='mr-3' />
                </Link>


              </>
            ) : (

              <Link to="/signup" style={linkStyles.style} className={linkStyles.classList}>Login</Link>

            )}





          </Nav>
        </Container>
      </Navbar>




    </>
  );
}

export default Header;