import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faHeart, faMagnifyingGlass, faArrowTrendUp, faCircleDollarToSlot, faUser } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/esm/NavLink';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { allUsers } from '../utils/queries';
import { Link } from 'react-router-dom';

const styles = {
  divider: {
    backgroundColor: 'gray',
    width: '100%',
    height: '1px',
    marginBottom: '.5rem'
  },
  homeIcon: {
    color: 'white',
    alignContent: 'center'
  },
  button: {
    maxWidth: '100%'
  },
  main: {
  
  }
}




function Sidebar() {

  const linkStyles = {

    style: {
    
    },
    classList: 'text-light'
  }
  
  const loggedIn = Auth.loggedIn()

  const { loading, data } = useQuery(allUsers);
  const users = data?.users || [];
  console.log(users);


  return (
    <>
    <div style={styles.main} className=''>
    <div className='divider' style={styles.divider}></div>
    <Nav.Link href='/'><FontAwesomeIcon icon={faHouse} size="lg" style={styles.homeIcon} /></Nav.Link>
    <div className='divider' style={styles.divider}></div>

    <div className='divider' style={styles.divider}></div>
    <Nav.Link href='/favorites' ><FontAwesomeIcon icon={faHeart} size="lg" style={styles.homeIcon} /></Nav.Link>
    <div className='divider' style={styles.divider}></div>

    <div className='divider' style={styles.divider}></div>
    <Nav.Link  href='/search' ><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={styles.homeIcon} /></Nav.Link>
    <div className='divider' style={styles.divider}></div>

    <div className='divider' style={styles.divider}></div>
    <Nav.Link href='/trending' ><FontAwesomeIcon icon={faArrowTrendUp} size="lg" style={styles.homeIcon} /></Nav.Link>
    <div className='divider' style={styles.divider}></div>

    <div className='divider' style={styles.divider}></div>
    <Nav.Link href='/donate' ><FontAwesomeIcon icon={faCircleDollarToSlot} size="lg" style={styles.homeIcon} /></Nav.Link>
    <div className='divider'  style={styles.divider}></div>
    
    <div className='divider' style={styles.divider}></div>
    {Auth.getProfile() ? (

<>


  <Link to="/profile" style={linkStyles.style} className={linkStyles.classList}>
    <FontAwesomeIcon icon={faUser} size="lg" style={{ color: 'white', height: '100%' }} className='mr-3' />
  </Link>

  <Link to="/search" style={linkStyles.style} className={linkStyles.classList}>
    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{ color: 'white', height: '100%' }} className='mr-3' />
  </Link>


</>
) : (

  <>
  <div className='divider' style={styles.divider}></div>
  <Nav.Link href='/donate' ><FontAwesomeIcon icon={faUser} size="lg" style={styles.homeIcon} /></Nav.Link>
  <div className='divider'  style={styles.divider}></div>
  </>

)}
<div className='divider' style={styles.divider}></div>

    
    
    </div>
    </>
  );
}

export default Sidebar;