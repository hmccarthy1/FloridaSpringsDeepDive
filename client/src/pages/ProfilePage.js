import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import SpringCard from '../components/springCard';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { SINGLE_SPRING, singleSpringAmenities, singleUser } from '../utils/queries';
import SpringCarousel from '../components/springCarousel';
import AmenitiesAccordion from '../components/AmenitiesAccordion';


const ProfilePage = (props) => {

    const {userID } = useParams();
    console.log('userID profile page', userID)
    const { loading, data } = useQuery(singleUser, {variables: {userID: userID}} ); 
    console.log('data profile page', data)


    const mapFavorites = (data) => {
        return (data?.singleUser?.favoriteSprings?.map((spring) => {
      
          return (
            <SpringCard spring={spring._id} />
          )
        })
        )
    }

    return(
        <>
        
<h1>Profile Page</h1>
        {data? 


(
    mapFavorites(data)
):(<h1>No Profile Found</h1>) }

       

        
        </>
    )
    

}

export default ProfilePage;