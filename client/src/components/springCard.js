import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useQuery } from '@apollo/client';
import { SINGLE_SPRING } from '../utils/queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Auth from '../utils/auth';
import { QUERY_USER } from '../utils/queries';
import auth from '../utils/auth';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function SpringCard(props) {

const profileID = auth.getProfile()?.data?._id  || "";

  const loggedIn = Auth.loggedIn()
  // const {loadingFaves, Faves}
  const { loading, data } = useQuery(SINGLE_SPRING, {variables: {springID: props.spring}} );


const styles = {
  button: {
   
  },
  cardTitle: {
    fontSize: '18pt'
  }
}



  return (
<>

{loading? (
 <div>Loading, please wait</div>
):(
<Card  className='col-xl-10 col-lg-6 col-md-12 col-sm-12 col-12'>
        <Card.Title className='h1  col-12' style={styles.cardTitle}>{data?.spring?.springName}  </Card.Title>
      <Card.Img variant="top" src= {data?.spring?.springMedia[0]?.imageURL} />
      <Card.Body>
        <Card.Text className='text-left'>
        {data?.spring?.springDescription}
        </Card.Text>
        <div className='row' style={{}}>
        <Button variant="primary" className='btn btn-lg  col-xl-4 col-lg-6 col-md-6 col-sm-8 col-xs-10 col-10' href={'spring/' + data?.spring?._id } style={styles.button}>Check it out!</Button>
    <Nav.Link  href={'/spring/' + data?.spring?._id} className='ml-3 col-1 btn' style={{backgroundColor: 'white', border: 'none'}}><FontAwesomeIcon icon={faHeart} size="xl" style={{color: 'red', border: 'none'}} /></Nav.Link>
    </div>
      </Card.Body>
    </Card>

)}



    
</>  
  );
}

export default SpringCard;



