import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faHeart, faMagnifyingGlass, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/esm/NavLink';

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
  }
}

function Sidebar() {
  return (
    <>
    <div className='divider' style={styles.divider}></div>
    <Nav.Link ><FontAwesomeIcon icon={faHouse} size="lg" style={styles.homeIcon}/></Nav.Link>
    <div className='divider' style={styles.divider}></div>
    <div className='divider' style={styles.divider}></div>
    <Nav.Link ><FontAwesomeIcon icon={faHeart} style={styles.homeIcon}/></Nav.Link>
    <div className='divider' style={styles.divider}></div>
    <div className='divider' style={styles.divider}></div>
    <Nav.Link ><FontAwesomeIcon icon={faMagnifyingGlass} style={styles.homeIcon}/></Nav.Link>
    <div className='divider' style={styles.divider}></div>
    <div className='divider' style={styles.divider}></div>
    <Nav.Link ><FontAwesomeIcon icon={faArrowTrendUp} style={styles.homeIcon}/></Nav.Link>
    <div className='divider' style={styles.divider}></div>
    <div className='divider' style={styles.divider}></div>
    <a className='text-white btn btn-primary' style={styles.button}>Donate</a>
    <div className='divider' style={styles.divider}></div>
    
    </>
  );
}

export default Sidebar;