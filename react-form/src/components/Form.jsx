import React, { useState } from 'react';

export default function Form() {

  const [userName,setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) =>{
    e.preventDefault();
    let newUser = {userName,email,password};
    console.log("Hello and welcome",newUser); 
  } 

  return (
    <form onSubmit={onSubmit} >
      <h1>This is a react form</h1>
      <label htmlFor="user">User Name: </label>
      <input type="text" id="user" value={userName} onChange={e=>setUser(e.target.value)}/>
      <br/>

      <label htmlFor="email">You Email: </label>
      <input type="email" id="email" value={email} onChange={e=>setEmail(e.target.value)} />
      <br/>

      <label htmlFor="password">Password: </label>
      <input type="password" id="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <br/>
      <input type="submit" value="Create User" />
    </form>
  )
}

