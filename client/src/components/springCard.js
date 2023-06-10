import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useQuery } from '@apollo/client';
import { SINGLE_SPRING } from '../utils/queries';


 function SpringCard(props) {

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
        <Card.Title className='h1' style={styles.cardTitle}>{data?.spring?.springName}</Card.Title>
      <Card.Img variant="top" src= {data?.spring?.springMedia[0]?.imageURL} />
      <Card.Body>
        <Card.Text className='text-left'>
        {data?.spring?.springDescription}
        </Card.Text>
        <Button variant="primary" className='btn btn-lg ' href={'spring/' + data?.spring?._id } style={styles.button}>Check it out!</Button>
      </Card.Body>
    </Card>

)}



    
</>  
  );
}

export default SpringCard;



