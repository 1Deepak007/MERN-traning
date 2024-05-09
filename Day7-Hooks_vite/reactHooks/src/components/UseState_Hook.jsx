import React from 'react'
import { useState } from 'react'

export default function UseState_Hook() {
  const [count, setCount] = useState(0);
  const [name, setname] = useState(null);
  const viewname = () => {
    // alert(name);
    document.getElementById('prntNme').innerText = `Welcome ${name}`
  }
  return (
    <div className='container my-4'>
      <h2 className='text-center text-decoration-underline '>UseStateHook</h2>
        <div className="row">
          <div className="col-md-3">
            <h5>Count : {count}</h5>
          </div>
          <div className="col">
            <button onClick={()=>setCount(count-1)} className='btn btn-primary'>-</button>
            <button onClick={()=>setCount(0)} className='btn btn-danger '>Reset</button>
            <button onClick={()=>setCount(count+1)} className='btn btn-success'>+</button>
          </div>
        </div> <hr />

        <div className="row">
          <div className="col">
            <input type="text" className='form-control' onChange={(e)=>setname(e.target.value)}/>
          </div>
          <div className="col">
            <button className='btn btn-primary' onClick={viewname}>View Name</button>
          </div>
          <div className="col">
            <p id='prntNme'></p>
          </div>
        </div>

        <hr />


    </div>
  )
}
