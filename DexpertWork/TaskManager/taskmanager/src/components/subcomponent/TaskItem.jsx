import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Table } from 'react-bootstrap';
import axios from 'axios';
import { FaEdit, FaCheck, FaTrash } from 'react-icons/fa';
import { format } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/fontStyles.css';

const TaskItem = ({ tasks, fetchTasks }) => {
  const [editingTask, setEditingTask] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredTasks(tasks);
    }
  }, [tasks, searchQuery]);

  const handleSearch = () => {
    if (searchQuery.trim().length > 0) {
      setFilteredTasks(
        tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredTasks(tasks);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8182/deletetask/${taskId}`);
      toast.success('Task deleted successfully');
    } catch (error) {
      console.error('Error deleting task:', error);
    } finally {
      fetchTasks(); // Refresh task list
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setNewTitle(task.title);
    setNewDescription(task.description);
    setNewDueDate(task.duedate);
    setNewStatus(task.status);
    setShowModal(true);
  };

  const handleUpdateTask = async () => {
    if (!editingTask) return;
    try {
      await axios.put(`http://localhost:8182/updatetask/${editingTask.id}`, {
        title: newTitle,
        description: newDescription,
        duedate: newDueDate,
        status: newStatus,
      });
      fetchTasks(); // Refresh task list
      setShowModal(false);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleMarkAsDoneTask = async (taskId) => {
    try {
      await axios.put(`http://localhost:8182/maketaskdone/${taskId}`, {
        status: 'completed',
      });
      fetchTasks(); // Refresh task list
    } catch (error) {
      console.error('Error marking task as done:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yy HH:mm');
  };

  return (
    <>
      <ToastContainer />
      <div className="row">
        <div className="col-md-3">
          <input
            id="search"
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4 p-1 rounded-xl mt-1"
          />
        </div>
        <div className="col">
          <button className="btnStyl3" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Title"
              />
            </Form.Group>
            <Form.Group controlId="formDescription" className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Description"
              />
            </Form.Group>
            <Form.Group controlId="formDueDate" className="mt-3">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                value={newDueDate}
                onChange={(e) => setNewDueDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formStatus" className="mt-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="progress">In Progress</option>
                <option value="completed">Completed</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateTask}>
            Update Task
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="table-responsive">
        <Table bordered striped>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{formatDate(task.duedate)}</td>
                <td>{task.status}</td>
                <td className="text-center">
                  <Button
                    variant="link"
                    onClick={() => handleEditTask(task)}
                    className="p-0 mx-2"
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    variant="link"
                    onClick={() => handleMarkAsDoneTask(task.id)}
                    className="p-0 mx-2"
                  >
                    <FaCheck />
                  </Button>
                  <Button
                    variant="link"
                    onClick={() => handleDeleteTask(task.id)}
                    className="p-0 mx-2"
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default TaskItem;





























// import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { FaEdit, FaCheck, FaTrash } from 'react-icons/fa';
// import { format } from 'date-fns';
// import '../../styles/fontStyles.css';

// import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
// import 'react-toastify/dist/ReactToastify.css';




//   const TaskItem = ({ tasks, fetchTasks }) => {
//   const [editingTask, setEditingTask] = useState(null);
//   const [newTitle, setNewTitle] = useState('');
//   const [newDescription, setNewDescription] = useState('');
//   const [newDueDate, setNewDueDate] = useState('');
//   const [newStatus, setNewStatus] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredTasks, setFilteredTasks] = useState(tasks);

//   // const navigate = useNavigate();

//   useEffect(() => {
//     setFilteredTasks(
//       tasks.filter(
//         (task) =>
//           task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           task.description.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     );
//   }, [searchQuery, tasks]);

//   const handleDeleteTask = async (taskId) => {
//     try {
//       await axios.delete(`http://localhost:8182/deletetask/${taskId}`);
//       toast.success('Tast deleted successfully');
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     } finally{
//       fetchTasks(); // Refresh task list
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
//         status: newStatus,
//       });
//       fetchTasks(); // Refresh task list
//       setEditingTask(null);
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
//   };

//   const handleMarkAsDoneTask = async (taskId) => {
//     try {
//       await axios.put(`http://localhost:8182/maketaskdone/${taskId}`, {
//         status: 'completed',
//       });
//       fetchTasks(); // Refresh task list
//     } catch (error) {
//       console.error('Error marking task as done:', error);
//     }
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return format(date, 'dd/MM/yy HH:mm');
//   };

//   // const notify = () => toast("Wow so easy!");

//   return (
//     <>
//       <input
//         id="search"
//         type="text"
//         placeholder="Search tasks..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="form-control mb-4"
//       />

//       {editingTask && (
//         <div className="edit-form">
//           <h3>Edit Task</h3>
//           <input
//             type="text"
//             value={newTitle}
//             onChange={(e) => setNewTitle(e.target.value)}
//             className="form-control m-4"
//             placeholder="Title"
//           />
//           <textarea
//             value={newDescription}
//             onChange={(e) => setNewDescription(e.target.value)}
//             className="form-control m-4"
//             placeholder="Description"
//           />
//           <input
//             type="date"
//             value={newDueDate}
//             onChange={(e) => setNewDueDate(e.target.value)}
//             className="form-control m-4"
//           />
//           <label htmlFor="status" className="form-label mt-4">Status</label>
//           <select
//             value={newStatus}
//             onChange={(e) => setNewStatus(e.target.value)}
//             className="form-control m-4"
//           >
//             <option value="pending">Pending</option>
//             <option value="progress">In Progress</option>
//             <option value="completed">Completed</option>
//           </select>
//           <button onClick={handleUpdateTask} className="btnStyl2 m-4">Update Task</button>
//         </div>
//       )}

//       {!editingTask && (
//         <div className="table-responsive">
//           <table className="table table-bordered table-striped">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th>Due Date</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredTasks.map((task) => (
//                 <tr key={task.id}>
//                   <td>{task.title}</td>
//                   <td>{task.description}</td>
//                   <td>{formatDate(task.duedate)}</td>
//                   <td>{task.status}</td>
//                   <td className="text-center">
//                     <button onClick={() => handleEditTask(task)} className="btn btn-link p-0 mx-2">
//                       <FaEdit />
//                     </button>
//                     <button onClick={() => handleMarkAsDoneTask(task.id)} className="btn btn-link p-0 mx-2">
//                       <FaCheck />
//                     </button>
//                     <button onClick={() => handleDeleteTask(task.id)} className="btn btn-link p-0 mx-2">
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
      
//     </>
//   );
// };

// export default TaskItem;
