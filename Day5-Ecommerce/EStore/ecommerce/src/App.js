import './App.css';
import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';    // importing bootstrap
import Navigationbar from './components/Navigationbar';
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import About from './pages/About';
import ViewProduct from './pages/ViewProduct';
import DisplayIndiProd from './pages/DisplayIndiProd';
import Cart from './components/Cart';


function App() {
  return (
    <>
      <Navigationbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/viewproduct/:id?' element={<ViewProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
