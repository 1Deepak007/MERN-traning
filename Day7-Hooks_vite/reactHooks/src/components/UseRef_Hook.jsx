import React, { useEffect, useRef, useState } from 'react'

export default function UseRefhook() {
    // on changing state, component re-renders
    const[count,setcount] = useState(0);

    // value of a will persist across re-renders
    // on changing value of ref, component don't rerenders
    const a = useRef(0);

    useEffect(()=>{
        a.current = a.current + 1;
        console.log(a.current);
    })

    //--------------------------------------------

    const btnRef = useRef();

    //--------------------------------------------


  return (
    <div>
        <h1 className='text-center text-decoration-underline '>useRef hook</h1>
        <h4 className='text-center'>count : {count}</h4>
        <button ref={btnRef} onClick={()=>setcount((count)=>count+1)}>Increase Count</button>

        <hr />

        <button onClick={()=>{btnRef.current.style.display = 'none'}}>Click Me!</button>

        <hr />

        <p>create a stopwatch here as example of useref</p>
         
    </div>
  )
}
