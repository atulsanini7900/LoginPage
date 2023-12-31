import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import MyNav from './MyNav';

function LoginPage() {
  return (
    <>
    <div><MyNav /></div>
    
    <MDBContainer  className="my-5 gradient-form">
      <MDBRow>
        <MDBCol md='6' className="mb-5"> {/* Adjusted col value */}
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <h4 className="mt-1 mb-5 pb-1">Please Login Here</h4>
            </div>
            <p>Please login to your account</p>
            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' placeholder='example@gmail.com' />
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' placeholder='**********' />
            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn outline className='mx-2' color='danger'>
                Create Account
              </MDBBtn>
            </div>
          </div>
        </MDBCol>
        <MDBCol md='6' className="mb-5"> {/* Adjusted col value */}
          <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a company</h4>
              <p className="small mb-0">When it comes to building a responsive app, CSS frameworks are useful in the market. 
              If you work as a front-end developer, then Bootstrap, Foundation, 
              and Bulma kind of framework are not new for you. Most industries use the Bootstrap framework. Millions of websites are running on bootstrap.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  );
}

export default LoginPage;
