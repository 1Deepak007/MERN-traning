// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import SignupLogin from './components/SignupLogin';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignupLogin/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;