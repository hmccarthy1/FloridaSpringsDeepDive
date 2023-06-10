import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import SpringCard from '../components/springCard';

const styles = {
    homeContent: {
   
        backgroundColor: 'white'

    },
    p: {
        lineHeight: '2',
        fontSize: '16pt'
    }
}

const Home = () => {
    return (
        <>
            <div className='homeContent row' style={styles.homeContent}>

                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-left'>
                    <h1 className='h1 col-12 bold' style={{height: 'auto'}}>Take a deep dive into Florida's Springs</h1>
                <p className='p text-left h-1'>For those of you who love nature, wildlife, and crystal-clear water, the florida springs are the place for you. We're here to give you all the info you need to find the right spring for you, and start having some amazing adventures.
                </p>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-center row justify-content-center'>
                    <SpringCard spring = '648490e08b950daa6fd22215' ></SpringCard>

                </div>
            </div>
            <div className='col-12 row'>
                <h1 className='strong mt-5 text-center h1 col-12'>Why Florida springs?</h1>
                <p className='text-left' style={styles.p}>Florida's freshwater springs are one of the best parts of Florida! They offer a unique array of experiences that you can't find anywhere else. All the water in the springs comes up from the aquifers undergroud, so the water is always crystal-clear and 72 degrees farenheit year-round. Each spring in florida is unique and offers it's own pros and cons - some have amazing freediving opportunities, some are bursting to the seams with wildlife, and some have breath-taking sights you can't see anywhere else. Here are some of my favorites, and why I like them: </p>
            </div>
        </>
    )
}

export default Home