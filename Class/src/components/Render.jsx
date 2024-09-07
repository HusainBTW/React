import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Render() {

    const [count , setCount] = useState(0);



    useEffect(()=>{
        console.log('This will run only one time initially when component mount')
    } , [])

    useEffect(()=>{
        console.log('This will run every time')
    })

    useEffect(()=>{
        console.log('This will run only when count is changed')
    } , [count])

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <h1>Render Component</h1>
        <input onChange={(e)=> {setUsername(e.target.value)}}/>
    </div>
  )
}
