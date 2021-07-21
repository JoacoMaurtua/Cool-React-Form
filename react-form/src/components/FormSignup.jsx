import React, { useState,useRef } from 'react';


export default function FormSignup({submitForm}) {

  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPass = useRef(null);
  const inputPass2 = useRef(null);

  const [state,setState] = useState({
      userName:'',
      email:'',
      password:'',
      password2:''
  });

  const {userName,email,password,password2} = state;

  const [errors,setErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const onChange = (event) =>{
      const {name,value} = event.target;
      setState({
        ...state,
        [name]:value
      });
  }

  const SubmitValidation = (state) =>{
    let errors = {};

    if(!state.userName.trim()) { errors.userName = 'Username required!'};
     
    if(!state.email) {errors.email = 'Email required!'};
      
    if(!state.password){errors.password = 'Password required!'};
      
    if(!state.password2){errors.password2 = 'Confirm password required!'};
    
    return errors;
  } 
  

  const onSubmit = (event) =>{
    event.preventDefault();
    const data = {...state};
    console.log("Welcome",data);
    setErrors(SubmitValidation(state));
  
    setIsSubmit(true);

    inputName.current.value = "";
    inputEmail.current.value = "";
    inputPass.current.value = "";
    inputPass2.current.value = "";

  }

  
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
          {
            //Submit validation:
            (errors.userName)?
            <p>{errors.userName}</p>:
            ''
          }
        
          {  
            //Input validation:
            (userName.length > 0 && userName.length < 5)?
            <p>User name must be at least five characters</p>:
            ''
          }

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

          {
            //Submit validation:
            (errors.email)?
            <p>{errors.email}</p>:
            ''
          }

          {
            //Input validation:
            (email.length > 0 && !/\S+@\S+\.\S+/.test(email))?
            <p>Email address is invalid</p>:
            ''
          }

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

          {
            //Submit validation:
            (errors.password)?
            <p>{errors.password}</p>:
            ''
          }

          {
            //Input validation:
            (password.length > 0 && password.length < 8)?
            <p>Password must be at least eight characters</p>:
            ''
          }

        </div>

        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
              Confirm Password: 
          </label>
          <input 
              id="password2"
              type="password" 
              name="password2"
              value = {password2}
              ref = {inputPass2}
              className="form-input" 
              placeholder="Enter your password again"
              onChange = {onChange}
          />

          {
            //Submit validation:
            (errors.password2)?
            <p>{errors.password2}</p>:
            ''
          }

          {
            //Input validation:
            (password2.length > 0 && password2 !== password)?
            <p>Passwords must match</p>:
            ''
          }

        </div>

        <button className="form-input-btn" type="submit">
          Sign Up
        </button>

        <span className="form-input-login">
          Already have an account?
          Login <a href="#">here</a>
        </span>

      </form>
    </div>
  );
}

