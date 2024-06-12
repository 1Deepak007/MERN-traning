import React, { useState, useEffect, useCallback } from 'react';
import { Modal, Button, Form, Table } from 'react-bootstrap';
import axios from 'axios';
import { FaEdit, FaCheck, FaTrash, FaSearch } from 'react-icons/fa';
import { format } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TbPencilPlus } from 'react-icons/tb';
import TaskFormModal from './TaskFormModal';
import '../../styles/fontStyles.css';

const TaskItem = ({ userId, tasks, fetchTasks }) => {
  const [editingTask, setEditingTask] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [showModal, setShowModal] = useState(false);
  const [showTaskFormModal, setShowTaskFormModal] = useState(false);

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
      <div className="flex mb-4">
        <div className="flex">
          <input
            id="search"
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4 p-1.5 rounded-xl mt-0 shadow-emerald-100"
          />
        </div>
        <div className="flex">
          <button className="btnStyl3 ms-2 p-3 w-auto" onClick={handleSearch}>
            <span className="flex">Search <FaSearch className="mt-1 ms-2" /></span>
          </button>
        </div>
        <button className="btnStyl3 ml-auto mt-2" onClick={() => setShowTaskFormModal(true)}>
          <span className="flex mt-2">Add <TbPencilPlus className="ms-2 mt-0 mb-1 size-7" /></span>
        </button>
      </div>

      <TaskFormModal userId={userId} fetchTasks={fetchTasks} showModal={showTaskFormModal} setShowModal={setShowTaskFormModal}/>

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