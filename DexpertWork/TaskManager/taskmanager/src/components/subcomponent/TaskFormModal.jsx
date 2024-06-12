import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { taskformSchema } from '../schemas/Schemas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaWindowClose } from "react-icons/fa";


const TaskFormModal = ({ userId, fetchTasks, showModal, setShowModal }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      user_id: userId,
      title: '',
      description: '',
      date_time: '',
      status: 'pending',
    },
    validationSchema: taskformSchema,
    onSubmit: async (values) => {
      const taskData = {
        user_id: userId,
        title: values.title,
        description: values.description,
        duedate: values.date_time,
        status: values.status,
      };
      try {
        await axios.post('http://localhost:8182/addtask', taskData);
        fetchTasks(); // Refresh task list
        navigate('/home');
        toast.success('Task added successfully');
        setShowModal(false);
      } catch (err) {
        console.log(err);
        toast.error('Failed to add task');
      }
    },
  });

  if (!showModal) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
          <h2 className="text-center text-decoration-underline mb-3 my-2 mt-3 flex">
            Add Task
            <span className='ml-auto'><FaWindowClose onClick={() => setShowModal(false)} /></span>
          </h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label my-3">Title</label>
              <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title} name="title" id="title" className="form-control" placeholder="Go for walk" aria-describedby="helpId"/>
              {formik.touched.title && formik.errors.title ? (
                <div className="text-danger">{formik.errors.title}</div>
              ) : null}

              <label htmlFor="description" className="form-label mt-4">Description</label>
              <textarea onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description} name="description" id="description" className="form-control" rows="4" placeholder="I have to go for a walk in evening." aria-describedby="helpId" />
              {formik.touched.description && formik.errors.description ? (
                <div className="text-danger">{formik.errors.description}</div>
              ) : null}

              <label htmlFor="date_time" className="form-label mt-4">Time</label>
              <input type="date" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.date_time} name='date_time' id='date_time' className='mx-4 my-2 mb-4'/>
              {formik.touched.date_time && formik.errors.date_time ? (
                <div className="text-danger">{formik.errors.date_time}</div>
              ) : null}

              <label htmlFor="status" className="form-label mt-4" style={{ display: 'block' }}>Status</label>
              <select onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.status} name='status' id='status' className='form-control my-2 mb-4' >
                <option value="pending">Pending</option>
                <option value="progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              {formik.touched.status && formik.errors.status ? (
                <div className="text-danger">{formik.errors.status}</div>
              ) : null}

              <button type='submit' className='btnStyl3'>Add Task</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default TaskFormModal;
