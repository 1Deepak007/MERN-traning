import './App.css';
import Navigationbar from './components/Navigationbar';
import { Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import User from './components/pages/User';
import Footer from './components/pages/Footer';

import Card from './components/Home';



function App() {

  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home name="Deepak" location="Pune" contact="8475847587" />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:username?" element={<User />} />
        <Route path="/card" element={<Card />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
