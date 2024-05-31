import React from 'react';
import '../styles/buttons.css';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { taskformSchema } from './schemas/Schemas';

const TaskForm = () => {
  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      user_id: '',  // Ensure this is filled or obtained from session
      title: '',
      description: '',
      date_time: '',
      status: 'pending'
    },
    validationSchema: taskformSchema,
    onSubmit: async (values) => {
      const taskData = {
        user_id: values.user_id,
        title: values.title,
        description: values.description,
        duedate: values.date_time,
        status: values.status
      };
      try {
        const res = await axios.post('http://localhost:8182/addtask', taskData);
        console.log(res);
        navigate('/home');
        alert('Task added successfully')
      } catch (err) {
        console.log(err);
      }
    }
  });

  return (
    <div className="container mx-5 shadow">
      <h3 className='text-center text-decoration-underline mb-5'>Add Task</h3>
      <div className="row justify-content-center">
        <div className="col-md-5 border-2">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="user_id" className="form-label">User Id</label>
              <input
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.user_id}
                name="user_id"
                id="user_id"
                className="form-control"
                placeholder="1"
                aria-describedby="helpId"
              />
              {formik.touched.user_id && formik.errors.user_id ? (
                <div className="text-danger">{formik.errors.user_id}</div>
              ) : null}

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
                className='form-control mx-4 my-2 mb-4'
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
    </div>
  );
}

export default TaskForm;






























// import React from 'react';
// import '../styles/buttons.css';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import { useNavigate } from 'react-router-dom';
// import { taskformSchema } from './schemas/Schemas';

// const TaskForm = () => {
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       user_id: null,  // Assume user_id will be provided or obtained from session
//       title: '',
//       description: '',
//       date_time: '',
//       status: 'pending' // Default status
//     },
//     validationSchema: taskformSchema,
//     onSubmit: async (values) => {
//       const taskData = {
//         user_id: values.user_id,
//         title: values.title,
//         description: values.description,
//         duedate: values.date_time,
//         status: values.status
//       };
//       try {
//         const res = await axios.post('http://localhost:8182/addtask', {taskData});
//         console.log(res);
//         navigate('/home');
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   });

//   return (
//     <div className="container mx-5 shadow">
//       <h3 className='text-center text-decoration-underline mb-5'>Add Task</h3>
//       <div className="row justify-content-center">
//         <div className="col-md-5 border-2">
//           <form onSubmit={formik.handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="user_id" className="form-label">User Id</label>
//               <input
//                 type="number"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.user_id}
//                 name="user_id"
//                 id="user_id"
//                 className="form-control"
//                 placeholder="1"
//                 aria-describedby="helpId"
//               />
//               {formik.touched.user_id && formik.errors.user_id ? (
//                 <div className="text-danger">{formik.errors.user_id}</div>
//               ) : null}

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
//                 type="datetime-local"
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
//                 className='form-control mx-4 my-2 mb-4'
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
// }

// export default TaskForm;
