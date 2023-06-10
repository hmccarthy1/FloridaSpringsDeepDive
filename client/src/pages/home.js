import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

const styles = {
    homeContent: {
        height: '93vh',
        backgroundColor: 'white'
 
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