import Button from 'react-bootstrap/Button';
import { useQuery } from '@apollo/client';
import { SINGLE_SPRING } from '../utils/queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Auth from '../utils/auth';
import { QUERY_USER } from '../utils/queries';
import Accordion from 'react-bootstrap/Accordion';






const AmenitiesAccordion = (props) => {

    console.log('props', props)

    const mapAccordionBody = (amenities)  => {
      console.log('mapProps', amenities)
        return(amenities.map( (amenity, index) => {
     return <> 
     <Accordion.Item eventKey={index}>
        <Accordion.Header>{amenity.amenityType}</Accordion.Header>
        <Accordion.Body className='text-left'>
          {amenity.amenityDescription} <br/>
        <Button variant="primary" className='btn btn-lg  col-xl-2 col-lg-4 col-md-6 col-sm-6 col-xs-6 col-6 btnSmall mt-2 text-align-center' href={'/' } style={{}}>Check it out!</Button>

        </Accordion.Body>
      </Accordion.Item>
      </>
    })
      )
    }
    return (<>
    
    <div className='col-12 row justify-content-center'>
    <Accordion className='mt-3'>
        {mapAccordionBody(props.amenities)}
    </Accordion>
    </div>

    </>)
}



export default AmenitiesAccordion;