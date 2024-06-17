import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase.jsx';

const LoginPage = () => {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(firebase);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Logging in a user...');
    const result = await firebase.signinUser(email, password);
    console.log('Log in successful!', result);
  };

  return (
    <div className="container mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            type="email" 
            placeholder="Enter email" 
          />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            type="password" 
            placeholder="Password" 
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
      <h1 className="mt-5 mb-5">Or</h1>
      <button onClick={firebase.signinWithGoogle} variant="danger">Sign in with Google</button>
    </div>
  );
};

export default LoginPage;
