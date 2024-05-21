import './App.css';
import { Route, Routes } from 'react-router-dom';
import Stopwatch from './components/stopwatch/Stopwatch';
import MyForm from './components/form/MyForm';
import Form from './components/mysql_formik_form/component/Form'

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Stopwatch />} />
        <Route path='/myform' element={<MyForm/>} />
        <Route path='/formformikmysql' element={<Form />}/>

      </Routes>
    </div>
  );
}

export default App;
