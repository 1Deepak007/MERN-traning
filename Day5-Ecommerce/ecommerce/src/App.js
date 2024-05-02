import './App.css';
import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';    // importing bootstrap
import Navigationbar from './components/Navigationbar';
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import About from './pages/About';

function App() {
  return (
    <>
      <Navigationbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
      </Routes>
    </>
  );
}

export default App;
