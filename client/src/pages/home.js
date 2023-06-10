import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import SpringCard from '../components/springCard';

const styles = {
    homeContent: {
   
        backgroundColor: 'white'

    }
}

const Home = () => {
    return (
        <>
            <div className='homeContent row' style={styles.homeContent}>

                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-center row'>
                    <h1 className='h1 col-12 bold'>Take a deep dive into Florida's Springs</h1>
                <p className='p text-left'>For those of you who love nature, wildlife, and crystal-clear water, the florida springs are the place for you. We're here to give you all the info you need to find the right spring for you, and start having some amazing adventures.
                </p>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-center row justify-content-center'>
                    <SpringCard spring = '648490e08b950daa6fd22215'></SpringCard>

                </div>
            </div>
        </>
    )
}

export default Home