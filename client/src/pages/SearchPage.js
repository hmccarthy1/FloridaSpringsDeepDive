import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import SpringCard from '../components/springCard';
import { useParams } from 'react-router-dom';
import { useLazyQuery, useQuery } from '@apollo/client';
import { SINGLE_SPRING, allSprings } from '../utils/queries';
import SpringCarousel from '../components/springCarousel';
import AmenitiesAccordion from '../components/AmenitiesAccordion';
import { singleSpringAmenities } from '../utils/queries';
import Form from 'react-bootstrap/Form';
import { FilteredSprings } from '../utils/queries';





const SearchPage = (props) => {
  
  
  const [formVisibility, setFormVisibility] = useState('');
  const [resultsVisibility, setResultsVisibility] = useState('none');
  const [searchTerm, setSearchTerm] = useState('');
  const [checked, setChecked] = useState([]);
  const { loading, data } =  useQuery(FilteredSprings, {variables: {amenitiesList: checked, springNameSearch: searchTerm}} );


const handleSubmit = async (event) => {
  event.preventDefault();
  console.log('search term', searchTerm)
  console.log('checked', checked)
  console.log('data results', data)
setFormVisibility('none')
setResultsVisibility('')

}

const handleSearchTermChange = (event) => {
  setSearchTerm(event.target.value);
  console.log('searchTerm', searchTerm)
}

const mapSpringCards = (data) => {
  return (data?.filteredSprings?.map((spring) => {

    return (
      <div className='mt-4'>
      <SpringCard spring={spring._id} />
      </div>
    )
  })
  )

}




// Add/Remove checked item from list
const handleCheck = (event) => {
  var updatedList = [...checked];
  if (event.target.checked) {
    updatedList = [...checked, event.target.value];
  } else {
    updatedList.splice(checked.indexOf(event.target.value), 1);
  }
  setChecked(updatedList);
  console.log(updatedList, 'updatedList');

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
              <div className='row col-12 mt-1'>
              <input value={amenity} type="checkbox" className='col-1 align-self-stretch' onChange={handleCheck}/>
              <div key={amenity} className='text-left col-11'>
                <span>{amenity}</span>
              </div>
              
                </div>
                </>
            )
        })
    }

    return (<><h1>SearchPage</h1>
    <div className='col-12 row justify-content-center m-0' id='SearchForm' style={{display: formVisibility}}>
    <Form className='col-8 mt-5 border border-primary'>
      <Form.Group className="mb-3 mt-2" controlId="springName" >
        <Form.Label className='text-left col-12 ml-0 p-0'>Spring Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={searchTerm} onChange={handleSearchTermChange}/>
        
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

    <div style={{display: resultsVisibility}}><h1>{"Search Results ( " + data?.filteredSprings?.length + " )"}</h1></div> 
    <div className='row col-12' style={{display: resultsVisibility}} >

    {data? (mapSpringCards(data)) : (<div>"Loading, please wait"</div>) }

    </div>
    </>)

}


export default SearchPage;