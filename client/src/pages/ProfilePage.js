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

    const { userID } = useParams();
    const tokenID = Auth?.getProfile()?.data._id;
    const IDsMatch = userID === tokenID;
    console.log('IDs match?', userID === tokenID)

    console.log('userID profile page', userID)
    const { loading, data } = useQuery(singleUser, { variables: { userID: userID } });
    console.log('data profile page', data)
console.log('emailllll', data?.singleUser?.email)

    const mapFavorites = (data) => {
        return (data?.singleUser?.favoriteSprings?.map((spring) => {

            return (
                <div className='mt-5'>
                    <SpringCard spring={spring._id} className='' />
                </div>
            )
        })
        )
    }

    return (
        <>

            <div className='row col-12 justify-content-between'>
                <h1 className='col-6'>{"Hi, " + data?.singleUser?.firstName}</h1>
            <div className='col-12 justify-content-start row mt-5' >
                <h3 className='text-left col-4'>Email: </h3>
                <h3 className='col-8 text-left'>{data?.singleUser?.email}</h3>

            </div>

            <div className='col-12 justify-content-start row mt-1' >
                <h3 className='text-left col-4'>Full Name: </h3>
                <h3 className='col-8 text-left'>{data?.singleUser?.firstName + " " +  data?.singleUser?.lastName}</h3>
            </div>
                {IDsMatch ? (
                    <>

                        <Button className=' col-6' id='logoutButton' onClick={Auth.logout}>Logout</Button>

                        {mapFavorites(data)}
                    </>
                ) : (<h1>No Profile Found</h1>)}


            </div>


        </>
    )


}

export default ProfilePage;