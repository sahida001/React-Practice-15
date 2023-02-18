
import React, { useState } from 'react'


export default function FROM() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const handleNameChange = (e) =>{
    setName(e.target.value)
   }

   const handleEmailChange = (e) =>{
    setEmail(e.target.value)
   }

   const handlePasswordChange = (e) =>{
    setPassword(e.target.value)
   }

   const handleSubmit = (e) =>{
    console.log ("form is submitted")
    console.log (name,email,password)
    e.preventDefault();
   }

  return (
    <div>
        
        <h1>Registration</h1>
        <form action='' onSubmit={handleSubmit}>
    <div>
        <label htmlFor='name'>Name : </label>
        <input type="text" name='name' id='name' value={name} onChange={handleNameChange} required/>
    </div>
    <br></br>
    <div>
        <label htmlFor='email'>Email : </label>
        <input type="email" name='email' id='email' value={email} onChange={handleEmailChange} required />
    </div>
    <br></br>

    <div>
        <label htmlFor='password'>Password : </label>
        <input type="password" name='password' id='password' value={password} onChange={handlePasswordChange} required />
    </div>
    <br></br>
    <div>
        <button type='submit'>Register</button>
    </div>


        </form>

    </div>
  )
}
