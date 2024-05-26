// Logout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.clear();
        navigate('/login');  // Redirect to the login page

        // // Manipulate history to prevent back navigation
        // window.history.pushState(null, null, '/login');
        // window.history.replaceState(null, null, '/login');

        // window.addEventListener('popstate', function(event) {
        //     window.history.pushState(null, null, '/login');
        // });
    }
    
    return (
        <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
    );
}
