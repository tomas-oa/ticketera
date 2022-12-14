import React, { useState } from 'react';
import {MDBContainer,MDBTabs,MDBTabsItem,MDBTabsLink,MDBTabsContent,MDBTabsPane,MDBBtn,MDBInput,MDBCheckbox}
from 'mdb-react-ui-kit';

const Login2=()=> {

  const [formValue, setFormValue] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });

  const onChange = (e) => {
    console.log(e);
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };


  const Registration = async(event) => {
    event.preventDefault();

    await fetch("http://localhost:27017/api/users/", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(
            {
                name: formValue.name,
                lastname: formValue.lastName,
                email: formValue.email,
                password: formValue.password
            }
        )
    });
}

  return (
    <MDBContainer className="p-3 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p><br></br></p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100">Login</MDBBtn>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p><br></br></p>
          </div>

          <form>
            <label>Nombre</label>
            <input type={'text'} name={'nombre'} />
          </form>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Login2;