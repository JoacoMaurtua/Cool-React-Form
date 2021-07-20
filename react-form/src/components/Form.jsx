import React, { useState, useRef } from 'react';


export default function Form() {

  const [state, setState] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  });

  const inputFirst = useRef(null);
  const inputLast = useRef(null);
  const inputEmail = useRef(null);
  const inputPass = useRef(null);
  const inputConfirm = useRef(null);
  

  const [shippingStatus, setShipping] = useState(false);

  

  const onChange = (event) =>{
    setState({
      ...state,
      [event.target.name]:event.target.value
    });
    
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    const data = {...state};
    console.log("Helo and Welcome",data);
    /* setState(""); */ // ESTO DA UN ERROR
    inputFirst.current.value = "";
    inputLast.current.value = "";
    inputEmail.current.value = "";
    inputPass.current.value = "";
    inputConfirm.current.value = "";
    setShipping(true);
  }

  /* const shipping = () =>{
    if(shippingStatus == true){
        return "Thank you for submitting the form!";
    }else{
        return "Welcome, please submit the form";
    }
  }    SE REMPLAZA USANDO EL OPERADOR TERNARIO MAS ABAJO*/

  const {firstName,lastName,email,password,confirmPassword} = state;

  return (
    <div className="Container">
      <h1>

        {
          shippingStatus?
          <p>Thank you for submitting the form!</p>:
          <p>Welcome, please submit the form</p>
        }

      </h1>
      <form  onSubmit={onSubmit}>
        <h1>This is a react form</h1>
        <label htmlFor="user">First Name: </label>
        <input type="text" id="user" ref={inputFirst} value={firstName} name="firstName" onChange={onChange}/>
        {
          (firstName.length > 0 && firstName.length < 2)?
          <p style={{color:"red"}}>Must be at least two characters</p>:
          ''
        }
        <br/>

        <label htmlFor="user">Last Name: </label>
        <input type="text" id="user" ref ={inputLast} value={lastName} name="lastName" onChange={onChange}/>
        {
          (lastName.length > 0 && lastName.length < 2)?
          <p style={{color:"red"}}>Must be at least two characters</p>:
          ''
        }
        <br/>

        <label htmlFor="email">You Email: </label>
        <input type="email" id="email" ref={inputEmail} value={email} name="email" onChange={onChange}/>
        {
          (email.length > 0 && email.length < 5)?
          <p style={{color:"red"}}>Must be at least five characters</p>:
          ''
        }
        <br/>

        <label htmlFor="password">Password: </label>
        <input type="password" id="password" ref={inputPass} value={password} name="password" onChange={onChange} />
        {
          (password.length > 0 && password.length < 8)?
          <p style={{color:"red"}}>Must be at least eight characters</p>:
          ''
        }
        <br/>

        <label htmlFor="password">Password: </label>
        <input type="password" id="password" ref={inputConfirm} value={confirmPassword} name="confirmPassword" onChange={onChange}/>
        {
          ( confirmPassword.length > 0 && confirmPassword !== password)?
          <p style={{color:"red"}}>Passwords must match</p>:
          ''
        }
        <br/>

        <input type="submit" value="Create User" />
      </form>

      <div className="data">
        <h3>Real time data</h3>
        <p>First Name: {firstName} </p>
        <p>Las Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm password: {confirmPassword}</p>
      </div>

    </div>

  )
}

