import React from 'react'
import { useState } from 'react'

export default function Home(props) {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [address,setAddress] = useState('');
    const [city,setCity] = useState('');
    
    function formSubmittion(e){
        e.preventDefault();
        console.log(`Email : ${email}. Password : ${password}. City : ${city}.Address : ${address}.`);
        alert(`Email : ${email}. Password : ${password}. City : ${city}.Address : ${address}.`);
    }

    //-----------------------------------------------------------------------

    const [count,setCount] = useState(0);

    return (
        <div className='container'>
            <h2 className='text-center text-decoration-underline'>Home</h2>
            <p>My name is {props.name}. Live in {props.location}. Contact on {props.contact}.</p>

            <hr />

            <h3 className='text-center my-2'>Form</h3>
            <form className="row g-3" onSubmit={formSubmittion}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} id="inputPassword4" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" onChange={e=>setAddress((e).target.value)} id="inputAddress" placeholder="1234 Main St" />
                </div>
                {/* <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div> */}
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" onChange={(e)=>setCity(e.target.value)} id="inputCity" />
                </div>
                {/* <div className="col-md-4">
                    <label for="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div> */}
                {/* <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div> */}
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>

            <hr />


            <h4>{count}</h4>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
        </div>
    )
}
