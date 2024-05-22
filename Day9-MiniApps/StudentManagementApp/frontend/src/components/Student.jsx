import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Student = () => {
  const[students, setStudents] = useState([]);

  // fetch data from backend
  useEffect(()=>{
    axios.get('http://localhost:8081/student/get-students')
    .then(res=>setStudents(res.data))
    .catch(err=>console.log(err))
  },[])

  console.log(students);

  const handleDelete = async(id) => {
    try{
      await axios.delete(`http://localhost:8081/student/del-students/${id}`)
      window.location.reload()
    }
    catch(err){
      console.log(err)
    }
  }


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center  align-items-center '>
      <div className="w-50 bg-white rounded p-4">
        <Link to="/create" className='btn btn-success'>Add +</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((data,i) => (
              <tr key={i}>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <tr>
                  <td>
                    <Link to={`update/${data.ID}`} className='btn btn-primary '>Update</Link>
                  </td>
                  <td>
                    <button onClick={(e)=>handleDelete(data.ID)} className='btn btn-danger'>Delete</button>
                  </td>
                </tr>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Student
