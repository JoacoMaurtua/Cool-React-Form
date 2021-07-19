import React, { useState } from 'react';

export default function Form() {

  const [userName,setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <h1>This is a react form</h1>
      <label htmlFor="user">User Name: </label>
      <input type="text" id="user" />
      <br/>

      <label htmlFor="email">You Email: </label>
      <input type="email" id="email" />
      <br/>

      <label htmlFor="password">Password: </label>
      <input type="password" id="password" />
      <br/>
      <input type="submit" value="Login" />
    </form>
  )
}

