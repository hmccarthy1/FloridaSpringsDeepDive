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
import Form from 'react-bootstrap/Form';


const SearchPage = (props) => {


    return (<><h1>SearchPage</h1>
    <div className='col-12 row justify-content-center m-0' >
    <Form className='col-8 mt-5 border border-primary'>
      <Form.Group className="mb-3 mt-2" controlId="springName" >
        <Form.Label className='text-left col-12 ml-0 p-0'>Spring Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-left col-12 ml-0 p-0'>Amenity Type</Form.Label>
       </Form.Group>
      <Button variant="primary" type="submit" className='mb-3'>
        Submit
      </Button>
    </Form>
    </div>

    </>)

}


export default SearchPage;