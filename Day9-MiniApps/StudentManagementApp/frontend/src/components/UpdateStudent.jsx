
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateStudent = () => {
    const [student, setStudent] = useState({ id: '', Name: '', Email: '' });
    
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const { id } = useParams();  
    const navigate = useNavigate();

    //---------------------------------------------------------------------
    // const[newname,setnewname] = useState();
    // const[newemail,setnewemail] = useState();

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const res = await axios.get(`http://localhost:8081/student/get-students/${id}`);
                if (res.data.length > 0) {
                    setStudent(res.data[0]);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchStudent();
    }, [id]);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         console.log(newname);
    //         // const res = await axios.put(`http://localhost:8081/student/update-student/${id}`, student);
    //         // const res = await axios.put(`http://localhost:8081/student/update-student/${student.Name, student.Email}}`, student);
    //         const res = await axios.post(`http://localhost:8081/student/update-student/${id}`, student);
    //         console.log(res.data);
    //         navigate('/');
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    //---------------------------------------------------------------------

    function handleSubmit(event){
        console.log('handle update event called')
        event.preventDefault();
        axios.put('http://localhost:8081/student/update-student/'+id,{name,email})
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }


    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-4">
                <form onSubmit={handleSubmit}>
                    <h3 className='mb-4'>Update Student</h3>
                    <label htmlFor="currentName">Current Name: {student.Name}</label><br/>
                    <label htmlFor="currentEmail">Current Email: {student.Email}</label><br/><br/>

                    <label htmlFor="Name">Updated Name</label>
                    <input
                        type="text"
                     //   value={student.Name}
                        // onChange={handleChange}
                        // onChange={(e)=>setnewname(e.target.value)}
                        onChange={(e)=>setName(e.target.value)}
                        name='name'
                        id='name'
                        placeholder='Enter Name'
                        className='form-control'
                    />

                    <label htmlFor="Email">Updated Email</label>
                    <input
                        type="email"
                       // value={student.Email}
                        // onChange={handleChange}
                        // onChange={(e)=>setnewemail(e.target.value)}
                        onChange={(e)=>setEmail(e.target.value)}
                        name='Email'
                        id='Email'
                        placeholder='Enter Email'
                        className='form-control'
                    />

                    <button className='btn btn-success my-2'>Update Details</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateStudent;






































// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link, useParams, useNavigate } from 'react-router-dom';


// const UpdateStudent = () => {

//     const { id } = useParams();
//     const [student, setStudent] = useState({ id:'', name: '', email: '' });
//     const navigate = useNavigate();

//     // console.log('ID received is : ',id)

//     useEffect(() => {
//         const fetchStudent = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:8081/student/get-students/${id}`);
//                 if (res.data.length > 0) { setStudent(res.data[0]); }
//                 // console.log('student data is : ', res.data);
//             } catch (err) {
//                 console.log(err);
//             }
//         };

//         fetchStudent();
//     }, [id]);

//     // console.log('STU DATA : ',student);
//     // console.log('Student name : ',student['Name']);


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.put(`http://localhost:8081/student/update-student/${id}`, student);
//             // console.log(res);
//             navigate('/');
//         } catch (err) {
//             console.log(err);
//         }
//     };


//     const[upname,setupname] = useState('');
//     const[upemail,setupemail] = useState('');
    




//     return (
//         <>
//             <div className='d-flex vh-100 bg-primary justify-content-center  align-items-center ' >
//                 <div className="w-50 bg-white rounded p-4">
//                     <form onSubmit={handleSubmit}>
//                         <h3 className='mb-4'>Update Student</h3>
//                         <label htmlFor="">Current Name : {student['Name']}</label>
//                         <label htmlFor="">Current Email : {student['Email']}</label>

//                         <br /> <br />


//                         <label htmlFor="name">Updated Name</label>
//                         {/* <input type="text" value={student['Name']} onChange={(e)=>setupname(e.target.value)} name='name' id='name' placeholder='Enter Name' className='form-control' /> */}
//                         <input type="text" value='' onChange={(e)=>setupname(e.target.value)} name='name' id='name' placeholder='Enter Name' className='form-control' />

//                         <label htmlFor="email">Updated Email</label>
//                         <input type="email" value='' onChange={(e)=>setupemail(e.target.value)} email='email' id='email' placeholder='Enter Email' className='form-control' />

//                         <button className='btn btn-success my-2'>Update Details</button>
//                     </form>
//                 </div>
//             </div >
//         </>
//     )
// }

// export default UpdateStudent
