import React, { useEffect, useState } from 'react';
import Navigationbar from '../components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import Tasklist from '../components/subcomponent/Tasklist';

const Home = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState(null);         // for accessing user's id

    useEffect(() => {
        axios.get('http://localhost:8182/home')
            .then((response) => {
                if (!response.data.valid) {
                    navigate('/');
                    console.log('valid', response.data.valid);
                } else {
                    setUserId(response.data.userId);
                    setLoading(false);
                    console.log('Valid', response.data.valid);
                }
            })
            .catch((err) => {
                console.error(err);
                navigate('/');
            });
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <Navigationbar />
            <div className="row">
                <div className="col mt-4">
                    <TaskForm userId={userId} />
                </div>
                <div className="col mt-4">
                    <Tasklist userId={userId} />
                </div>
            </div>
        </div>
    );
};

export default Home;