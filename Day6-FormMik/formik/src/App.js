import './App.css';
import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';    // importing bootstrap
import Navigationbar from './components/Naigationbar';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
