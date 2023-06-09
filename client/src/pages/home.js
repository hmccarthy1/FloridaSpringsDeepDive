import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

const styles = {
    homeContent: {
        backgroundImage: `url(https://res.cloudinary.com/dsvmviwkc/image/upload/v1681680355/hu9ow4bb4kpsbrhp9rtf.jpg)`,
        height: '93vh',
        backgroundRepeat: 'no-repeat'
    }
}

const Home = () => {
    return (
        <>
        <div className='homeContent' style={styles.homeContent}>

        </div>
        </>
    )
}

export default Home