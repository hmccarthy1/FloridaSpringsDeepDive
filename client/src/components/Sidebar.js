import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/esm/NavLink';

const styles = {
  divider: {
    backgroundColor: 'gray',
    width: '100%',
    height: '1px'
  },
  homeIcon: {
    color: 'white'
  }
}

function Sidebar() {
  return (
    <>
    <div className='divider' style={styles.divider}></div>
    <Nav.Link ><FontAwesomeIcon icon={faHouse} size="lg" style={styles.homeIcon}/></Nav.Link>
    <div className='divider' style={styles.divider}></div>



    </>
  );
}

export default Sidebar;