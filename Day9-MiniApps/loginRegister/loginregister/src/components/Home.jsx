import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home() {
    const [user, setUser] = useState(null); // Initialize user as null
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:8181')
            .then(res => {
                // if session is not valid, go back to login page
                if (res.data.valid) {
                    setUser(res.data.username); // Correctly set user to the username object
                } else {
                    navigate('/login');
                }
                console.log(res);
            })
            .catch(err => console.log(err));
    }, [navigate]);

    const handleLogout = () => {
        axios.get('http://localhost:8181/logout')
            .then(res => {
                if (res.data.logout) {
                    // Redirect to login page
                    window.location.href = '/login';
                }
            })
            .catch(err => console.log(err));
    };

    if (!user) {
        return <div>Loading...</div>; // Display a loading state while user data is being fetched
    }
    // console.log(user.id);
    // console.log(user.username);
    // console.log(user.email);

    

    return (
        <div className='container'>
            <h2 className='text-center text-decoration-underline mt-2'>Profile</h2>
            <div className="row my-4">
                <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3F1YXJlJTIwcHJvZmlsZSUyMGltYWdlcyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                            alt="user image" className="img-fluid rounded-start" />
                        <Card.Body>
                            <Card.Title>{user.username}</Card.Title> {/* Correctly access username */}
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Link to={`/completeprofile/${user.id}`} variant="primary">Complete your profile</Link> {/* Use user id */}
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-8 ms-2">
                    <div className="card" style={{ width: "100%" }}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title display-3">{user.username}</h5> {/* Correctly access username */}
                                </div>
                                <div className="col ms-auto text-end">
                                    <Button onClick={handleLogout} className="btn btn-danger">Logout</Button>
                                </div>
                            </div>
                            <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6> {/* Correctly access email */}
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
