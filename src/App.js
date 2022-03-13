
import './App.css';
import React from 'react';
import {Button,Form,FormGroup ,Label,Input} from 'reactstrap';
import {FacebookLoginButton,TwitterLoginButton,InstagramLoginButton,GithubLoginButton} from 'react-social-login-buttons';

function App() {
  return (
    <Form className="login-form">
      <h1>
        <span className='font-weight-bold' >mywebsite</span>.com
      </h1>
      <h2 className='text-center'>welcome</h2>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder='Email'></Input>
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" placeholder='Password'></Input>
      </FormGroup>
      <Button className='btn-lg btn-dark btn-block'>Log in</Button>
      <div className='text-center pt-3'>
        Or continue with your social account
      </div>
      <FacebookLoginButton className='mt-3 mb-3'>
      </FacebookLoginButton>
      <InstagramLoginButton className='mt-3 mb-3'></InstagramLoginButton>
      <TwitterLoginButton className='mt-3 mb-3'></TwitterLoginButton>
      <div className='text-center'>
        <a href='/sign-up'>Sign up</a>
        <span className='p-2'>|</span>
        <a href='/forgot-password'>Forgot Password</a>
      </div>

    </Form>
    
  );
}

export default App;
