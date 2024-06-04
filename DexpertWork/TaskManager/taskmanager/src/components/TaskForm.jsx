import React from 'react';
import '../styles/buttons.css';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { taskformSchema } from './schemas/Schemas';
import '../styles/fontStyles.css';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css';

const TaskForm = ({ userId, fetchTasks }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      user_id: userId,
      title: '',
      description: '',
      date_time: '',
      status: 'pending'
    },
    validationSchema: taskformSchema,
    onSubmit: async (values) => {
      const taskData = {
        user_id: userId,
        title: values.title,
        description: values.description,
        duedate: values.date_time,
        status: values.status
      };
      try {
        await axios.post('http://localhost:8182/addtask', taskData);
        fetchTasks(); // Refresh task list
        navigate('/home');
        toast.success('Task added successfully'); // Used Toastify success notification
      } catch (err) {
        console.log(err);
        toast.error('Failed to add task'); // Use Toastify error notification
      }
    }
  });

  return (
    <div className="container mx-5 shadow pb-4">
      <h2 className='text-center text-decoration-underline mb-5 my-2 amaranth-regular py-1'>Add Task</h2>
      <div className="row justify-content-center">
        <div className="col-md-5 border-2">
        <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                name="title"
                id="title"
                className="form-control"
                placeholder="Go for walk"
                aria-describedby="helpId"
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="text-danger">{formik.errors.title}</div>
              ) : null}

              <label htmlFor="description" className="form-label mt-4">Description</label>
              <textarea
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                name="description"
                id="description"
                className="form-control"
                rows="4"
                placeholder="I have to go for a walk in evening."
                aria-describedby="helpId"
              />
              {formik.touched.description && formik.errors.description ? (
                <div className="text-danger">{formik.errors.description}</div>
              ) : null}

              <label htmlFor="date_time" className="form-label mt-4">Time</label>
              <input
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date_time}
                name='date_time'
                id='date_time'
                className='mx-4 my-2 mb-4'
              />
              {formik.touched.date_time && formik.errors.date_time ? (
                <div className="text-danger">{formik.errors.date_time}</div>
              ) : null}

              <label htmlFor="status" className="form-label mt-4">Status</label>
              <select
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.status}
                name='status'
                id='status'
                className='form-control  my-2 mb-4'
              >
                <option value="pending">Pending</option>
                <option value="progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              {formik.touched.status && formik.errors.status ? (
                <div className="text-danger">{formik.errors.status}</div>
              ) : null}

              <button type='submit' className='btnStyl2'>Add Task</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer /> {/* Toastify Container */}
    </div>
  );
};

export default TaskForm;


























// import React, { useEffect } from 'react';
// import '../styles/buttons.css';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import { useNavigate } from 'react-router-dom';
// import { taskformSchema } from './schemas/Schemas';
// import '../styles/fontStyles.css';

// const TaskForm = ({ userId }) => {
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       user_id: userId,
//       title: '',
//       description: '',
//       date_time: '',
//       status: 'pending'
//     },
//     validationSchema: taskformSchema,
//     onSubmit: async (values) => {
//       const taskData = {
//         user_id: userId,
//         title: values.title,
//         description: values.description,
//         duedate: values.date_time,
//         status: values.status
//       };
//       try {
//         const res = await axios.post('http://localhost:8182/addtask', taskData);
//         console.log(res);
//         navigate('/home');
//         alert('Task added successfully');
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   });

  
//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8182/gettasks/${userId}`);
//       } 
//       catch (error) {
//         console.error('Error fetching tasks:', error);
//       }
//     };

//     fetchTasks();
//   }, [formik.handleSubmit]);

//   return (
//     <div className="container mx-5 shadow pb-4">
//       <h2 className='text-center text-decoration-underline mb-5 my-2 amaranth-regular py-1'>Add Task</h2>
//       <div className="row justify-content-center">
//         <div className="col-md-5 border-2">
//           <form onSubmit={formik.handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="title" className="form-label">Title</label>
//               <input
//                 type="text"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.title}
//                 name="title"
//                 id="title"
//                 className="form-control"
//                 placeholder="Go for walk"
//                 aria-describedby="helpId"
//               />
//               {formik.touched.title && formik.errors.title ? (
//                 <div className="text-danger">{formik.errors.title}</div>
//               ) : null}

//               <label htmlFor="description" className="form-label mt-4">Description</label>
//               <textarea
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.description}
//                 name="description"
//                 id="description"
//                 className="form-control"
//                 rows="4"
//                 placeholder="I have to go for a walk in evening."
//                 aria-describedby="helpId"
//               />
//               {formik.touched.description && formik.errors.description ? (
//                 <div className="text-danger">{formik.errors.description}</div>
//               ) : null}

//               <label htmlFor="date_time" className="form-label mt-4">Time</label>
//               <input
//                 type="date"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.date_time}
//                 name='date_time'
//                 id='date_time'
//                 className='mx-4 my-2 mb-4'
//               />
//               {formik.touched.date_time && formik.errors.date_time ? (
//                 <div className="text-danger">{formik.errors.date_time}</div>
//               ) : null}

//               <label htmlFor="status" className="form-label mt-4">Status</label>
//               <select
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.status}
//                 name='status'
//                 id='status'
//                 className='form-control  my-2 mb-4'
//               >
//                 <option value="pending">Pending</option>
//                 <option value="progress">In Progress</option>
//                 <option value="completed">Completed</option>
//               </select>
//               {formik.touched.status && formik.errors.status ? (
//                 <div className="text-danger">{formik.errors.status}</div>
//               ) : null}

//               <button type='submit' className='btnStyl2'>Add Task</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskForm;