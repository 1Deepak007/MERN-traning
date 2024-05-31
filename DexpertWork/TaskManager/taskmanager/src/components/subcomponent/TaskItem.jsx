const TaskItem = ({ userId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:8182/gettasks/${userId}`);
        setTasks(response.data.tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
  
    fetchTasks();
  }, [userId]);

  return (
    <div> 
      <h2 className='text-center text-decoration-underline'>Task List</h2>
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
      </ul>
    </div>
  );
};
