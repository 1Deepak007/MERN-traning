import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const TaskItem = ({ userId, tasks, fetchTasks }) => {
  const [editingTask, setEditingTask] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  const [newStatus, setNewStatus] = useState('');

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8182/deletetask/${taskId}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setNewTitle(task.title);
    setNewDescription(task.description);
    setNewDueDate(task.duedate);
    setNewStatus(task.status);
  };

  const handleUpdateTask = async () => {
    if (!editingTask) return 'cannot edit task';
    try {
      await axios.put(`http://localhost:8182/updatetask/${editingTask.id}`, {
        title: newTitle,
        description: newDescription,
        duedate: newDueDate,
        status: newStatus,
      });

      fetchTasks();
      setEditingTask(null);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleMarkAsDoneTask = async (taskId) => {
    try {
      await axios.put(`http://localhost:8182/updatetask/${taskId}`, {
        status: 'completed',
      });
      fetchTasks();
    } catch (error) {
      console.error('Error marking task as done:', error);
    }
  };

  return (
    <>
      <h2 className='text-center text-decoration-underline'>Task List</h2>
      <ul className='my-3'>
        {tasks.map((task) => (
          <li key={task.id} className='my-3'>
            <div>
              <h4>{task.title}</h4>
              <p>Description: {task.description}</p>
              <p>Due Date: {task.duedate}</p>
              <p>Status: {task.status}</p>
              <div className="row">
                <div className="col">
                  <button onClick={() => handleEditTask(task)} className='btnStyl2' style={{ height: '35px', width: '80%' }}>Edit</button>
                </div>
                <div className="col">
                  <button onClick={() => handleMarkAsDoneTask(task.id)} className='btnStyl2' style={{ height: '35px', width: '80%' }}>Done</button>
                </div>
                <div className="col">
                  <button onClick={() => handleDeleteTask(task.id)} className='btnStyl2' style={{ height: '35px', width: '80%' }}>Delete</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {editingTask && (
        <div className="edit-form">
          <h3>Edit Task</h3>
          <input 
            type="text" 
            value={newTitle} 
            onChange={(e) => setNewTitle(e.target.value)} 
            className='form-control m-4' 
            placeholder="Title" 
          />
          <textarea 
            value={newDescription} 
            onChange={(e) => setNewDescription(e.target.value)} 
            className='form-control m-4' 
            placeholder="Description" 
          />
          <input 
            type="date" 
            value={newDueDate} 
            onChange={(e) => setNewDueDate(e.target.value)} 
            className='form-control m-4' 
          />
          <label htmlFor="status" className="form-label mt-4">Status</label>
          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            className='form-control m-4'
          >
            <option value="pending">Pending</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <button onClick={handleUpdateTask} className='btnStyl2 m-4'>Update Task</button>
        </div>
      )}
    </>
  );
};

export default TaskItem;





























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TaskItem = ({ userId }) => {
//   const [tasks, setTasks] = useState([]);
//   const [editingTask, setEditingTask] = useState(null);
//   const [newTitle, setNewTitle] = useState('');
//   const [newDescription, setNewDescription] = useState('');
//   const [newDueDate, setNewDueDate] = useState('');
//   const [newStatus, setNewStatus] = useState('');

//   const handleDeleteTask = async (taskId) => {
//     try {
//       await axios.delete(`http://localhost:8182/deletetask/${taskId}`);
//       setTasks(tasks.filter(task => task.id !== taskId));
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   const handleEditTask = (task) => {
//     setEditingTask(task);
//     setNewTitle(task.title);
//     setNewDescription(task.description);
//     setNewDueDate(task.duedate);
//     setNewStatus(task.status);
//   };

//   const handleUpdateTask = async () => {
//     if (!editingTask) return;

//     try {
//       await axios.put(`http://localhost:8182/updatetask/${editingTask.id}`, {
//         title: newTitle,
//         description: newDescription,
//         duedate: newDueDate,
//         status: newStatus
//       });

//       setTasks(tasks.map(task => 
//         task.id === editingTask.id 
//         ? { ...task, title: newTitle, description: newDescription, duedate: newDueDate, status: newStatus } 
//         : task
//       ));
//       setEditingTask(null);
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
//   };

//   const handleMarkasdoneTask = async (taskId) => {
//     try {
//       await axios.put(`http://localhost:8182/updatetask/${taskId}`, {
//         status: 'completed'
//       });
//       setTasks(tasks.map(task => 
//         task.id === taskId ? { ...task, status: 'completed' } : task
//       ));
//     } catch (error) {
//       console.error('Error marking task as done:', error);
//     }
//   };

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8182/gettasks/${userId}`);
//         setTasks(response.data.tasks);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//       }
//     };

//     fetchTasks();
//   }, [userId,handleDeleteTask]);

//   return (
//     <>
//       <h2 className='text-center text-decoration-underline'>Task List</h2>
//       <ul className='my-3'>
//         {tasks.map(task => (
//           <li key={task.id} className='my-3'>
//             <div>
//               <h4>{task.title}</h4>
//               <p>Description: {task.description}</p>
//               <p>Due Date: {task.duedate}</p>
//               <p>Status: {task.status}</p>
//               <div className="row">
//                 <div className="col">
//                   <button onClick={() => handleEditTask(task)} className='btnStyl2' style={{ height: '35px', width: '80%' }}>Edit</button>
//                 </div>
//                 <div className="col">
//                   <button onClick={() => handleMarkasdoneTask(task.id)} className='btnStyl2' style={{ height: '35px', width: '80%' }}>Done</button>
//                 </div>
//                 <div className="col">
//                   <button onClick={() => handleDeleteTask(task.id)} className='btnStyl2' style={{ height: '35px', width: '80%' }}>Delete</button>
//                 </div>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {editingTask && (
//         <div className="edit-form">
//           <h3>Edit Task</h3>
//           <input 
//             type="text" 
//             value={newTitle} 
//             onChange={(e) => setNewTitle(e.target.value)} 
//             className='form-control m-4' 
//             placeholder="Title" 
//           />
//           <textarea 
//             value={newDescription} 
//             onChange={(e) => setNewDescription(e.target.value)} 
//             className='form-control m-4' 
//             placeholder="Description" 
//           />
//           <input 
//             type="date" 
//             value={newDueDate} 
//             onChange={(e) => setNewDueDate(e.target.value)} 
//             className='form-control m-4' 
//           />
//           <label htmlFor="status" className="form-label mt-4">Status</label>
//           <select
//             value={newStatus}
//             onChange={(e) => setNewStatus(e.target.value)}
//             className='form-control m-4'
//           >
//             <option value="pending">Pending</option>
//             <option value="progress">In Progress</option>
//             <option value="completed">Completed</option>
//           </select>
//           <button onClick={handleUpdateTask} className='btnStyl2 m-4'>Update Task</button>
//         </div>
//       )}
//     </>
//   );
// };

// export default TaskItem;
