import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskItem = (userId) => {
  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     try {
  //       // Fetch tasks from the API endpoint using the userId from session
  //       const response = await axios.get(`http://localhost:8182/gettasks/${userId}`);
  //       setTasks(response.data); // Assuming the response data is an array of tasks
  //     } catch (error) {
  //       console.error('Error fetching tasks:', error);
  //     }
  //   };
  
  //   fetchTasks(); // Call the fetchTasks function when the component mounts
  // }); // Dependency array ensures that fetchTasks is called when userId changes
  
  // useEffect(()=>{
  //   axios.get('http://localhost:8182/gettasks/1')
  // })

  return (
    <div> 
      <h2 className='text-center text-decoration-underline'>Task List</h2>
      {/* <h2>Tasks for User {userId}</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <div>
              <h3>{task.title}</h3>
              <p>Description: {task.description}</p>
              <p>Due Date: {task.duedate}</p>
              <p>Status: {task.status}</p>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default TaskItem;
