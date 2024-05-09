import React, { useState } from 'react'
import { useEffect } from 'react'

export default function UseEffect_Hook() {
    // useEffect runs whenever the component gets mounted.
    // useEffect hook handles the sideffects of a component.
    // used for calling APIs.

    // Runs on Every render
    useEffect(()=>{
        alert('useEffect that run on every render.')
    });

    // Runs on First render
    useEffect(()=>{
        alert("Hey! This is useEffectHook..! Run of 1st render")
    },[])

    // Runs on every Count change
    const[count,setcount] = useState(0);
    useEffect(()=>{
        alert(`Count : ${count}`)
    },[count]);         

  return (
    <div className='container'>
      <h2 className='text-center text-decoration-underline '>UseEffectHook</h2>
      
      <p>{count}</p>
      <button onClick={()=>setcount(count+1)}>Increase Count</button>
    </div>
  )
}
