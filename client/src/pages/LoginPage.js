import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const styles = {
  formLabels: {
    color: 'white',
    fontSize: '18pt'
  },
  buttons: {
    marginBottom: '3pt'
  }
}

const LoginPage = (props) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [loginUser, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const { data } = await loginUser({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
<>

<div className='row col-12 justify-content-center contentContainer mt-0'  style={{
  backgroundImage: `url(https://res.cloudinary.com/dsvmviwkc/image/upload/v1681680355/hu9ow4bb4kpsbrhp9rtf.jpg)`,
  height: '93vh',
  backgroundRepeat: 'no-repeat'
}}>
<Form className=' col-xl-3 col-lg-4 col-md-6 col-sm-6 col-8  justify-content-center align-items-start border border-primary bg-dark' onSubmit={handleFormSubmit} style={{height: "fit-content"}} id='signupForm'>
      
      <Form.Group className="mb-3 align-items-start column" controlId="formBasicEmail">
        <Form.Label onChange={handleChange} className='text-left col-12 p-0' style={styles.formLabels}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleChange} value={formState.email} name='email'/>
      </Form.Group>

      
      
      <Form.Group className="mb-3 column text-left mt-3" controlId="formPassword">
        <Form.Label className='col-12 ml-0 p-0 text-light text-lg' style={styles.formLabels}>First Name</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handleChange} name='password'/>
      </Form.Group>

      
      

     

        
       <div className='row'>
      <Button variant="primary" type="submit" className='mt-3 mb-3 align-self-start ml-3 btn btn-lg btn-primary' style={styles.buttons} id='signupButton'>
        Sign in
      </Button>

      </div>
    </Form>

    </div>

           

    </>

  );
};

export default LoginPage;
