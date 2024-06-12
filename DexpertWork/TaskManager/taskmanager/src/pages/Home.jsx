import React, { useEffect, useState, useCallback } from 'react';
import Navigationbar from '../components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import TaskForm from '../components/TaskForm';
import Tasklist from '../components/subcomponent/Tasklist';

const Home = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState(null);
    const [tasks, setTasks] = useState([]);

    const fetchTasks = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8182/gettasks/${userId}`);
            setTasks(response.data.tasks);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    }, [userId]);

    useEffect(() => {
        axios.get('http://localhost:8182/home')
            .then((response) => {
                if (!response.data.valid) {
                    navigate('/');
                    console.log('valid', response.data.valid);
                } else {
                    setUserId(response.data.userId);
                    setLoading(false);
                    fetchTasks();
                    console.log('Valid', response.data.valid);
                }
            })
            .catch((err) => {
                console.error(err);
                navigate('/');
            });
    }, [navigate, fetchTasks]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='bg-cover bg-slate-300 h-screen' >
            <Navigationbar />
            <Tasklist userId={userId} tasks={tasks} fetchTasks={fetchTasks} />
        </div>
    );
};

export default Home;



































// import React, { useEffect, useState } from 'react';
// import Navigationbar from '../components/Navbar';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import TaskForm from '../components/TaskForm';
// import Tasklist from '../components/subcomponent/Tasklist';

// const Home = () => {
//     const navigate = useNavigate();
//     const [loading, setLoading] = useState(true);
//     const [userId, setUserId] = useState(null);         // for accessing user's id

//     useEffect(() => {
//         axios.get('http://localhost:8182/home')
//             .then((response) => {
//                 if (!response.data.valid) {
//                     navigate('/');
//                     console.log('valid', response.data.valid);
//                 } else {
//                     setUserId(response.data.userId);
//                     setLoading(false);
//                     console.log('Valid', response.data.valid);
//                 }
//             })
//             .catch((err) => {
//                 console.error(err);
//                 navigate('/');
//             });
//     }, [navigate]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }


//     return (
//         <div>
//             <Navigationbar />
//             <div className="row">
//                 <div className="col-md-5 mt-5 pt-3 pe-5  ">
//                     <TaskForm userId={userId} />
//                 </div>
//                 <div className="col md-7 mt-4">
//                     <Tasklist userId={userId} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;