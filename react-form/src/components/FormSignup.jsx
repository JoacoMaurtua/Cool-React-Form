import React, { useState,useRef } from 'react'

export default function FormSignup() {

  const [state,setState] = useState({
      userName:'',
      email:'',
      password:'',
      password2:''
  });

  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPass = useRef(null);
  const inputPass2 = useRef(null);

  const onChange = (event) =>{
      const {name,value} = event.target;
      setState({
        ...state,
        [name]:value
      });
  }

  const onSubmit = (event) =>{
      event.preventDefault();
      const data = {...state};
      console.log("Welcome",data);
      inputName.current.value = '';
      inputEmail.current.value = '';
      inputPass.current.value = '';
      inputPass2.current.value = '';
  }

  const {userName,email,password,password2} = state;

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={ onSubmit }>
        <h1>
          The Falcodev community welcomes all those who wish to be 
          aware of the latest in information technology as well as 
          participate in some of our projects as software developers.
        </h1>

        <div className="form-inputs">
          <label htmlFor="userName" className="form-label">
              Username: 
          </label>
          <input 
              id="userName"
              type="text" 
              name="userName"
              value = {userName}
              ref = {inputName}
              className="form-input"
              placeholder="Enter your userName"
              onChange = {onChange}
          />
        </div>

        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
              Email: 
          </label>
          <input 
              id="email"
              type="email" 
              name="email"
              value = {email}
              ref = {inputEmail}
              className="form-input" 
              placeholder="Enter your email"
              onChange = {onChange}
          />
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
              Password: 
          </label>
          <input 
              id="password"
              type="password" 
              name="password"
              value = {password}
              ref = {inputPass}
              className="form-input" 
              placeholder="Enter your password"
              onChange = {onChange}
          />
        </div>

        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
              Confirm Password: 
          </label>
          <input 
              id="password2"
              type="password2" 
              name="password2"
              value = {password2}
              ref = {inputPass2}
              className="form-input" 
              placeholder="Enter your password again"
              onChange = {onChange}
          />
        </div>

        <button type="submit">Sign Up</button>

        <span>
          Already have an account?
          Login <a href="#">here</a>
        </span>

      </form>
    </div>
  );
}

