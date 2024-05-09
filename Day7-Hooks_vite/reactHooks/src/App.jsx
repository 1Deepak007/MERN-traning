// import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import UseState_Hook from './components/UseState_Hook';
import UseEffect_Hook from './components/UseEffect_Hook';
import UseRefhook from './components/UseRef_Hook';
import CrudNodeReactMysql from './components/CrudNodeReactMysql'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/usestatehook' element={<UseState_Hook/>} />
        <Route path='/useEffecthook' element={<UseEffect_Hook/>} />
        <Route path='/useRefhook' element={<UseRefhook/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App