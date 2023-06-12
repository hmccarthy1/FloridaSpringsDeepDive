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
import AmenityCarousel from '../components/amenityCarousel';

const IndividualAmenity = (props) => { 

    const { amenityID, springId } = useParams();

    console.log('amenityIDs', amenityID);
    console.log('springIds', springId);
    const { loading, data } = useQuery(SINGLE_SPRING, {variables: {springID: springId}} );
    const {loading: loadingAmenities, data: dataAmenities} = useQuery(singleSpringAmenities, {variables: {springId: springId}} );
    console.log('data', data)
    const thisAmenity = data?.spring?.amenities?.find(amenity => amenity._id == amenityID);
    console.log('thisAmenity', thisAmenity)
    // console.log('has a website', thisAmenity.amenityWebsite != undefined)
    const hasWebsite = thisAmenity?.amenityWebsite != undefined;
    console.log('hasWebsite', hasWebsite)
    console.log('dataAmenitiess', dataAmenities);
    
    console.log('foundAmenity', data?.spring?.amenities?.find(amenity => amenity._id == amenityID));

return (<>

{/* Wrapper for the main spring view portion */}

<div className='col-12 row m-0 justify-content-center'>
    
{/* Section for the spring title, description, and basic info - address, amenity count, etc - col-6 on XL and LG screens, col-12 on anything else */}

    <div className='col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 row border border-primary p-0'>
        <h1 className='col-12 h1 text-center'> {dataAmenities? (thisAmenity?.amenityType + ' at ' + data?.spring?.springName): ('Loading, please wait')} </h1>
        <p className='col-12 h2 text-left mt-3'> {data? (thisAmenity?.amenityDescription): ('Loading, please wait')}</p>
        <p className='col-12 h2 text-left mt-3'> {data? ("This spring's address is: " + data.spring.address): ('Loading, please wait')}</p>
        <p className='col-12 h2 text-left mt-3'> {data? ("Cost: " + thisAmenity?.Cost): ('Loading, please wait')}</p>
        {thisAmenity?.amenityWebsite? (
         <a className='col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-6 col-4 h2 text-center mt-3 ml-3 btn btn-primary text-white ' target="_blank" href={thisAmenity?.amenityWebsite}>Check out the website here!</a>

        ) : (<></>)}
    </div> 
    
    {/* Section for carousel - should have same dimensions as previous section */}
    
    <div className='col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 row border border-primary p-0 justify-content-center'>
   
    {loading? (<div><h1>Loading, please wait</h1></div>) : (
       <><AmenityCarousel springId={springId} amenityID = {thisAmenity?._id} />
        <div className='col-12 mt-5 whiteSmoke m-0 p-0'>


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



export default IndividualAmenity;