import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import SpringCard from '../components/springCard';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { SINGLE_SPRING } from '../utils/queries';
import SpringCarousel from '../components/springCarousel';
import AmenitiesAccordion from '../components/AmenitiesAccordion';
import { singleSpringAmenities } from '../utils/queries';

const IndividualSpring = (props) => { 

    const { springId } = useParams();
  const { loading, data } = useQuery(SINGLE_SPRING, {variables: {springID: springId}} );
  const {loading: loadingAmenities, data: dataAmenities} = useQuery(singleSpringAmenities, {variables: {springId: springId}} );
  console.log('data', data)

  console.log('dataAmenities', dataAmenities)


return (<>

{/* Wrapper for the main spring view portion */}

<div className='col-12 row m-0 justify-content-center'>
    
{/* Section for the spring title, description, and basic info - address, amenity count, etc - col-6 on XL and LG screens, col-12 on anything else */}

    <div className='col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 row border border-primary p-0'>
        <h1 className='col-12 h1 text-center'> {data? (data.spring.springName): ('Loading, please wait')} </h1>
        <p className='col-12 h2 text-left mt-3'> {data? (data.spring.springDescription): ('Loading, please wait')}</p>
        <p className='col-12 h2 text-left mt-3'>{data? ('This spring has a total of: ' + data.spring.amenities.length + ' amenities'  ) : ('Loading, please wait')} </p>
        <p className='col-12 h2 text-left mt-3'> {data? ("This spring's address is: " + data.spring.address): ('Loading, please wait')}</p>
        <p className='col-12 h2 text-left mt-3'> {data? ("County: " + data.spring.springCounty): ('Loading, please wait')}</p>
        <p className='col-12 h2 text-left mt-3'> {data? ("Admission: " + data.spring.admission): ('Loading, please wait')}</p>
    </div> 
    
    {/* Section for carousel - should have same dimensions as previous section */}
    
    <div className='col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 row border border-primary p-0 justify-content-center'>
   
    {loading? (<div><h1>Loading, please wait</h1></div>) : (
       <><SpringCarousel springId={springId} />
        <div className='col-12 mt-5 whiteSmoke m-0 p-0'>

        <h1 className='col-12 text-center'>Amenities</h1>

    </div>
    <div className='row col-12 justify-content-center'>
    <AmenitiesAccordion amenities = {data?.spring?.amenities} spring = {springId}></AmenitiesAccordion>
    </div>
    </> 
        )}
    </div>

    
</div>


{/* <div className='col-12 row'>

    <h1 className='col-12 mb-5'><strong>{data?.spring?.springName}</strong></h1>

{loading? (<div><h1>Loading, please wait</h1></div>) : (

<SpringCarousel springId={springId} />
)}


</div> */}

</>

)



}



export default IndividualSpring;