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
import { singleUser } from '../utils/queries';

function SpringCard(props) {

const profileID = auth.getProfile()?.data?._id  || "";

  const loggedIn = Auth.loggedIn()
  const profile = Auth.getProfile()?.data;
  const { loading : loadingUser, data: userProfile} = useQuery(singleUser, {variables: {userID: profileID}} );
  console.log('profile (user)', userProfile)
  
  console.log('profile', profile)
  // const {loadingFaves, Faves}
  const { loading, data } = useQuery(SINGLE_SPRING, {variables: {springID: props.spring}} );
  
  var springInFavorites = false

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
        <div className='row align-items-stretch justify-content-between' style={{}}>
        <Button variant="primary" className='btn btn-lg  col-xl-2 col-lg-4 col-md-6 col-sm-6 col-xs-6 col-6' href={'spring/' + data?.spring?._id } style={styles.button}>Check it out!</Button>
        {springInFavorites? (
        <FontAwesomeIcon icon={faHeart} size="lg" style={{color: 'red', height: '100%'}} className='iconLarge align-self-stretch justify-self-stretch'/>
        ): (
            <FontAwesomeIcon icon={faHeart} size="lg" style={{color: 'lightgray', height: '100%'}} className='iconLarge align-self-stretch justify-self-stretch' />
        )}
    </div>
      </Card.Body>
    </Card>

)}



    
</>  
  );
}

export default SpringCard;



