import React, { useState } from 'react';

export default function Form() {

  const [state, setState] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  });

  const [shippingStatus, setShipping] = useState(false);

  const [inputError, setInputError] = useState(""); 

  const onSubmit = (event) =>{
    event.preventDefault();
    const data = {...state};
    console.log("Helo and Welcome",data);
    setShipping(true);
    setState("");

  }

  const onChange = (event) =>{
    setState({
      ...state,
      [event.target.name]:event.target.value
    });
    
    if(event.target.value.length < 1){
      setInputError("Input is required!");
    }else if(event.target.value.length < 3){
      setInputError("Title must be 3 characters or longer!");
    }
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
          <h3>Thank you for submitting the form!</h3>:
          <h3>Welcome, please submit the form</h3>
        }

      </h1>
      <form  onSubmit={onSubmit}>
        <h1>This is a react form</h1>
        <label htmlFor="user">First Name: </label>
        <input type="text" id="user" value={firstName} name="firstName" onChange={onChange}/>
        {
          inputError?
          <p> {inputError} </p>:
          ''
        }
        <br/>

        <label htmlFor="user">Last Name: </label>
        <input type="text" id="user" value={lastName} name="lastName" onChange={onChange}/>
        <br/>

        <label htmlFor="email">You Email: </label>
        <input type="email" id="email" value={email} name="email" onChange={onChange}/>
        <br/>

        <label htmlFor="password">Password: </label>
        <input type="password" id="password" value={password} name="password" onChange={onChange} />
        <br/>

        <label htmlFor="password">Password: </label>
        <input type="password" id="password" value={confirmPassword} name="confirmPassword" onChange={onChange}/>
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

