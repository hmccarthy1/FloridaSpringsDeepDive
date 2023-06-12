import Button from 'react-bootstrap/Button';
import { useQuery } from '@apollo/client';
import { SINGLE_SPRING } from '../utils/queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground, faPersonSwimming, faPersonHiking, faFerry, faDove } from '@fortawesome/free-solid-svg-icons';
import Auth from '../utils/auth';
import { QUERY_USER } from '../utils/queries';
import Accordion from 'react-bootstrap/Accordion';






const AmenitiesAccordion = (props) => {

    console.log('props', props)

    const mapAccordionBody = (amenities)  => {
    const amenityIcon = ''
      console.log('mapProps', amenities)

      const findAmenityIcon = (amenity) => {
        switch (amenity.amenityType) {
            case 'Camping':  {return <FontAwesomeIcon icon={faCampground} className='mr-2'/>};
            case 'Snorkeling/Freediving': return <FontAwesomeIcon icon={faPersonSwimming} className='mr-2'/>;
            case 'Hiking': return <FontAwesomeIcon icon={faPersonHiking} className='mr-2'/>;
            case 'Boat Tours': return <FontAwesomeIcon icon={faFerry} className='mr-2'/>;
            case 'Bird Watching': return <FontAwesomeIcon icon={faDove} className='mr-2'/>;
            default:  {return ''}
      }}

        return(amenities.map( (amenity, index) => {
     return <> 
     <Accordion.Item eventKey={index}>
        <Accordion.Header>{findAmenityIcon(amenity)} {amenity.amenityType} 
         </Accordion.Header>
        <Accordion.Body className='text-left'>
          {amenity.amenityDescription} <br/>
        <Button variant="primary" className='btn btn-lg  col-xl-2 col-lg-4 col-md-6 col-sm-6 col-xs-6 col-6 btnSmall mt-2 text-align-center' href={'/spring/' + props.spring +  "/" + amenity._id} style={{}}>Check it out!</Button>

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