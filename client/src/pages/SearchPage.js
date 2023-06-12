import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import SpringCard from '../components/springCard';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { SINGLE_SPRING, allSprings } from '../utils/queries';
import SpringCarousel from '../components/springCarousel';
import AmenitiesAccordion from '../components/AmenitiesAccordion';
import { singleSpringAmenities } from '../utils/queries';
import Form from 'react-bootstrap/Form';


const SearchPage = (props) => {

  const {loading, data} = useQuery( allSprings );
  console.log('spring data', data)
  const staticData = data?.allSprings


const handleSubmit = async (event) => {
  event.preventDefault();
  console.log('checked', checked)

  const filterOut = false

  

}

  const [checked, setChecked] = useState([]);

// Add/Remove checked item from list
const handleCheck = (event) => {
  var updatedList = [...checked];
  if (event.target.checked) {
    updatedList = [...checked, event.target.value];
  } else {
    updatedList.splice(checked.indexOf(event.target.value), 1);
  }
  setChecked(updatedList);
  console.log(updatedList)
};

    const amenitesList = [
        'Camping',
        'Canoeing/Kayaking',
        'Scuba Diving',
        'Hiking',
        'Bird Watching',
        'Tubing',
        'Boat Tours',
        'Snorkeling/Freediving'
    ]

    const mapList = (amenitesList) => {
      console.log('mapList', amenitesList)
        return amenitesList.map((amenity) => {
            return(
              <>
              <div className='row col-12'>
              <input value={amenity} type="checkbox" className='col-1' onChange={handleCheck}/>
              <div key={amenity} className='text-left col-11'>
                <span>{amenity}</span>
              </div>
              
                </div>
                </>
            )
        })
    }

    return (<><h1>SearchPage</h1>
    <div className='col-12 row justify-content-center m-0' >
    <Form className='col-8 mt-5 border border-primary'>
      <Form.Group className="mb-3 mt-2" controlId="springName" >
        <Form.Label className='text-left col-12 ml-0 p-0'>Spring Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="amenities">
        <Form.Label className='text-left col-12 ml-0 p-0'>Amenity Type</Form.Label>
        {mapList(amenitesList)}
       </Form.Group>
      <Button variant="primary" type="submit" className='mb-3' onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>

    </>)

}


export default SearchPage;