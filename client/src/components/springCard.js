import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useQuery, useMutation } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Auth from '../utils/auth';
import { QUERY_USER, singleUser, SINGLE_SPRING } from '../utils/queries';
import { adjustFavorite } from '../utils/mutations';
import auth from '../utils/auth';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import CreateToast from './Toast';
function SpringCard(props) {

const profileID = auth.getProfile()?.data?._id  || "";

const loggedIn = Auth.loggedIn()
const profile = Auth.getProfile()?.data;
const { loading : loadingUser, data: userProfile} = useQuery(singleUser, {variables: {userID: profileID}} );
console.log('profile (user)', userProfile)

console.log('profile', profile)
// const {loadingFaves, Faves}
const { loading, data } = useQuery(SINGLE_SPRING, {variables: {springID: props.spring}} );
const [toastVisible, setToastVisible] = useState('none');
  var  springInFavorites =( userProfile?.singleUser?.favoriteSprings?.find(spring => spring._id == props.spring) != undefined)
  
  if (userProfile?.singleUser?.favoriteSprings?.find(spring => spring._id == props.spring)) {
    console.log(data?.spring?.springName + 'spring in favorites');
    springInFavorites = true
  } else{
    console.log(data?.spring?.springName + ' not in favorites')
  }
  
  console.log('spring in favorites', springInFavorites)
  
  const styles = {
    button: {
      
  },
  cardTitle: {
    fontSize: '18pt'
  }
}

const [adjustFavoriteSpring, { error, result }] = useMutation(adjustFavorite);

const [showA, setShowA] = useState(false);
const [toastMessage, setToastMessage] = useState('Spring added to favorites!');
const toggleShowA = () => setShowA(!showA);


const handleAdjustment = async (event) => {
  if (springInFavorites) {
    setToastMessage('Spring removed from favorites!')
  } else{
     setToastMessage('Spring added to favorites!')
  }
  if (profileID) {
    adjustFavoriteSpring({ variables: { springId: props.spring, userId: profileID } });
    
    setShowA()

  }
  else { window.location.assign('/login') }
}



  return (
<>

{loading? (
 <div>Loading, please wait</div>
):(
  <>
  

<Card  className='col-xl-10 col-lg-6 col-md-12 col-sm-12 col-12 border border-primary'>
  
  <Row className='col-12 m-0  justify-content-center'>
      <Col  className="m-0 col-12">
      
        <Toast show={showA} onClose={toggleShowA} className='col-12 m-0'>
          <Toast.Header className='m-0 text-center'>
            
            <strong className="me-auto">Refresh to see changes</strong>
            <small></small>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </Col>
     
  </Row>



 
        <Card.Title className='h1 mt-2 col-12' style={styles.cardTitle}>{data?.spring?.springName}  </Card.Title>
      <Card.Img variant="top" src= {data?.spring?.springMedia[0]?.imageURL} />
      <Card.Body>
        <Card.Text className='text-left'>
        {data?.spring?.springDescription}
        </Card.Text>
        <div className='row align-items-stretch justify-content-between' style={{}}>
        <Button variant="primary" className='btn btn-lg  col-xl-2 col-lg-4 col-md-6 col-sm-6 col-xs-6 col-6' href={'spring/' + data?.spring?._id } style={styles.button}>Check it out!</Button>
        {springInFavorites? (
        <FontAwesomeIcon icon={faHeart} size="lg" style={{color: 'red', height: '100%'}} className='iconLarge align-self-stretch justify-self-stretch' onClick={handleAdjustment}/>
        ): (
            <FontAwesomeIcon icon={faHeart} size="lg" style={{color: 'lightgray', height: '100%'}} className='iconLarge align-self-stretch justify-self-stretch' onClick={handleAdjustment}/>
        )}
    </div>
      </Card.Body>
    </Card>
</>
)}



    
</>  
  );
}

export default SpringCard;



