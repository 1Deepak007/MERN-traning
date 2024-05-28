// import './App.css';
import LoginSignup from './pages/LoginSignup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" component={<LoginSignup/>} />
      </Routes>
    </div>
  );
}

export default App;
