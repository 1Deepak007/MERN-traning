import React from 'react'
import { useState } from 'react'

export default function Home(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [gender, setGender] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [formSubmit, setFormSubmit] = useState(false);

    function formSubmittion(e) {
        e.preventDefault();
        console.log(`Email : ${email}. Password : ${password}. City : ${city}. State : ${state}. Address : ${address}. Confirm : ${confirm}`);
        alert(`Email : ${email}. Password : ${password}. City : ${city}. State : ${state}. Address : ${address}. Gender : ${gender}. Confirm : ${confirm}`);
        setFormSubmit(true);
    }

    //-----------------------------------------------------------------------

    const [count, setCount] = useState(0);

    return (
        <div className='container'>
            <h2 className='text-center text-decoration-underline'>Home</h2>
            <p>My name is {props.name}. Live in {props.location}. Contact on {props.contact}.</p>

            <hr />

            {formSubmit ? (
                <div className="container">
                    <h3 className='text-center my-2'>Your Information</h3>
                    <div className="row">
                        <div className="col-md-4"> Email : {email} </div>
                        <div className="col-md-4"> Password : {password}</div>
                        <div className="col-md-4"> Gender : {gender}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"> City : {city}</div>
                        <div className="col-md-4"> State : {state}</div>
                        <div className="col-md-4"> Confirmation : {confirm}</div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Address : {address};
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <h3 className='text-center my-2'>Form</h3>
                    <form className="row g-3" onSubmit={formSubmittion}>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} id="inputPassword4" required />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" onChange={e => setAddress((e).target.value)} id="inputAddress" placeholder="1234 Main St" required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" onChange={(e) => setCity(e.target.value)} id="inputCity" required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select" value={state} onChange={(e) => setState(e.target.value)}>
                                <option value="Uttar Pradesh" defaultChecked>Uttar Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Uttrakhand">Uttrakhand</option>
                                <option value="Rajasthan">Rajasthan</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">Gender</label>
                            <div className="form-check">
                                <input id="gendermale" name="gender" className="form-check-input" type="radio" value="male" onChange={(e) => setGender(e.target.value)} required />
                                <label className="form-check-label" htmlFor="gendermale"> Male </label>
                            </div>
                            <div className="form-check">
                                <input id="genderfemale" name="gender" className="form-check-input" type="radio" value="female" onChange={(e) => setGender(e.target.value)} required />
                                <label className="form-check-label" htmlFor="genderfemale"> Female </label>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" onChange={(e) => setConfirm(e.target.value)} required />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    My above detail is correct as per my knowledge.
                                </label>
                            </div>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            )}




            <hr />


            <h4>{count}</h4>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}
