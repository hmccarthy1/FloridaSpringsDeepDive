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

const IndividualSpring = (props) => { 

    const { springId } = useParams();
  const { loading, data } = useQuery(SINGLE_SPRING, {variables: {springID: springId}} );
  console.log('data', data)


return (<>

<div className='col-12 row'>

    <h1 className='col-12 mb-5'><strong>{data?.spring?.springName}</strong></h1>

{loading? (<div><h1>Loading, please wait</h1></div>) : (

<SpringCarousel springId={springId} />
)}


</div>

</>

)



}



export default IndividualSpring;