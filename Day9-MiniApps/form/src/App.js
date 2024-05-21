import './App.css';
import { Route, Routes } from 'react-router-dom';
import Stopwatch from './components/stopwatch/Stopwatch';
import MyForm from './components/form/MyForm';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Stopwatch />} />
        <Route path='/myform' element={<MyForm/>} />
      </Routes>
    </div>
  );
}

export default App;
