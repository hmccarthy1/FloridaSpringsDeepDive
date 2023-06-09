import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

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

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
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
<Form className='col-3  justify-content-center align-items-start border border-primary bg-dark' onSubmit={handleFormSubmit} style={{height: "fit-content"}}>

      <Form.Group className="mb-3 column text-left mt-3" controlId="formFirstName">
        <Form.Label className='col-12 ml-0 p-0 text-light text-lg' style={styles.formLabels}>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" onChange={handleChange} name='firstName'/>
      </Form.Group>

      <Form.Group className="mb-3 column text-left" controlId="formLastName">
        <Form.Label className='col-12 ml-0 p-0' style={styles.formLabels}>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" onChange={handleChange} name='lastName'/>
      </Form.Group>

      <Form.Group className="mb-3 column text-left" controlId="formUserName">
        <Form.Label className='col-12 ml-0 p-0' style={styles.formLabels}>Username</Form.Label>
        <Form.Control type="text" placeholder="Userame" onChange={handleChange} name='username'/>
      </Form.Group>
      
      <Form.Group className="mb-3 align-items-start column" controlId="formBasicEmail">
        <Form.Label onChange={handleChange} className='text-left col-12 p-0' style={styles.formLabels}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleChange} value={formState.email} name='email'/>
      </Form.Group>

      <Form.Group className="mb-3 column text-left" controlId="formBasicPassword">
        <Form.Label className='col-12 ml-0 p-0' style={styles.formLabels}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handleChange} name='password'/>
      </Form.Group>

        
       <div className='row'>
      <Button variant="primary" type="submit" className='mt-3 mb-3 align-self-start ml-3 btn btn-lg btn-primary' style={styles.buttons}>
        Sign up
      </Button>

      </div>
    </Form>

    </div>

           

    </>

  );
};

export default Signup;
