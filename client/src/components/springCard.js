import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useQuery } from '@apollo/client';
import { SINGLE_SPRING } from '../utils/queries';


function SpringCard(props) {

  const { loading, data } = useQuery(SINGLE_SPRING, {variables: {springID: props.spring}} );
  const spring = data?.spring || [];
console.log(spring)

  return (
    <Card style={{ width: '18rem' }}>
        <Card.Title>{spring.springName}</Card.Title>
      <Card.Img variant="top" src={spring.springMedia[0].imageURL}/>
      <Card.Body>
        <Card.Text>
          {spring.springDescription}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default SpringCard;



