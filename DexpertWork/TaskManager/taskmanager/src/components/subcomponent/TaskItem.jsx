import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskItem = ({ userId }) => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDueDate, setNewDueDate] = useState('');


  useEffect(() => {
    // fetching all tasks using userid that i have passed from home as prop
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:8182/gettasks/${userId}`);
        setTasks(response.data.tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
  
    fetchTasks();
  }, [userId,tasks]);

  const handleEditTask=async(taskId)=>{
    console.log('handleEditTask')
  }
  
  const handleMarkasdoneTask=async(taskId)=>{
    console.log('handleMarkasdoneTask')
  }

  const handleDeleteTask=async(taskId)=>{
    try{
      await axios.delete(`http://localhost:8182/deletetask/${taskId}`);
      setTasks(tasks.filter(task => task.id !== taskId));
    }
    catch(error){
      console.error('Error deleting task:', error);
    }
  }


  
  return (
    <div> 
      <h2 className='text-center text-decoration-underline'>Task List</h2>
      <ul className='my-3'>
        {tasks.map(task => (
          <li key={task.id} className='my-3'>
            <div>
              <h4>{task.title}</h4>
              <p>Description: {task.description}</p>
              <p>Due Date: {task.duedate}</p>
              <p>Status: {task.status}</p>
              <div className="row">
                <div className="col">
                  <button onClick={()=>handleEditTask(task.id)} className='btnStyl2' style={{'height':'35px', 'width':'80%'}}>Edit task</button>
                </div>
                <div className="col">
                  <button onClick={()=>handleMarkasdoneTask(task.id)} className='btnStyl2' style={{'height':'35px', 'width':'80%'}}>Mark as done</button>
                </div>
                <div className="col">
                  <button onClick={()=>handleDeleteTask(task.id)} className='btnStyl2' style={{'height':'35px', 'width':'80%'}}>Delete task</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskItem;










// const TaskItem = ({ userId }) => {
//   const [tasks, setTasks] = useState([]);

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
//   }, [userId]);

//   return (
//     <div> 
//       <h2 className='text-center text-decoration-underline'>Task List</h2>
//       <ul>
//         {tasks.map(task => (
//           <li key={task.id}>
//             <div>
//               <h3>{task.title}</h3>
//               <p>Description: {task.description}</p>
//               <p>Due Date: {task.duedate}</p>
//               <p>Status: {task.status}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
