import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function About() {

  const [data, setdata] = useState();
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);


  useEffect(() => {
    const fetchdata = async () => {
      try {
        setloading(true);
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setdata(response.data);
        // setdata(JSON.stringify(response,null,2));
        setloading(false);
        console.log(data);
      }
      catch (error) {
        seterror(error);
        setloading(false)
      }
    }
    fetchdata();
  }, []);


  if (loading)
    return <div>Loading...</div>
  else if (error)
    return <div>Error : {error}</div>
  else
    return (
      <div className='container'>

        {/* <p>{JSON.stringify(data,null,2)}</p>
        <hr /> */}

        {/* <table>
          <thead className='table table-striped'>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => {
              return <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            })}
          </tbody>
        </table> */}


        <h3 className='text-center text-decoration-underline my-5'>User Details</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">USERNAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">ADDRESS</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((user,index)=>{
                return <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address.suite+" "+user.address.street+", "+user.address.city}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    )
}
