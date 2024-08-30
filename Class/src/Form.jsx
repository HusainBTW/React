import React, { useState } from 'react'

export default function Form() {
    const [username , setUsername]=useState('')
    const handleUsernameChange=(event)=>{
        setUsername(event.target.value);
    };
  return (
    <div>
      <form>
        <label>Username</label>
        <input type='text' />
        <label>Password</label>
        <input type='password' />
        <label>Submit</label>
        <input type='submit' />
      </form>
    </div>
  )
}