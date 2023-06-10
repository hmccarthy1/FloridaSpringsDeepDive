import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useQuery } from '@apollo/client';
import { SINGLE_SPRING } from '../utils/queries';


 function SpringCard(props) {

  const { loading, data } = useQuery(SINGLE_SPRING, {variables: {springID: props.spring}} );
   console.log(data)





  return (
<>

{loading? (
 <div>Loading, please wait</div>
):(
<Card  className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
        <Card.Title>{data?.spring?.springName}</Card.Title>
      <Card.Img variant="top" src= {data?.spring?.springMedia[0]?.imageURL} />
      <Card.Body>
        <Card.Text className='text-left'>
        {data?.spring?.springDescription}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

)}



    
</>  
  );
}

export default SpringCard;



