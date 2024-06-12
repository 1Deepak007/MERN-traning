// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import SignupLogin from './components/SignupLogin';
import Home from './pages/Home';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignupLogin />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}




export default App;