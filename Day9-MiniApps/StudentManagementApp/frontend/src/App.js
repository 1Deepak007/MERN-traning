import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Student from './components/Student'
import CreateStudent from './components/CreateStudent'
import UpdateStudent from './components/UpdateStudent'
import Login from './components/Login';
import Home from './components/Home'

function App() {
  // Manipulate history to prevent back navigation
  // window.history.pushState(null, null, '/login');
  // window.history.replaceState(null, null, '/login');

  // window.addEventListener('popstate', function(event) {
  //     window.history.pushState(null, null, '/login');
  // });

  // const [isLoggedIn, setIsLoggedIn] = useState(null);
  // useEffect(() => {
  //   const email = localStorage.getItem('email');
  //   if (email) {
  //     verifyUser(email).then((exists) => {
  //       setIsLoggedIn(exists);
  //     });
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }, []);

  // if (isLoggedIn === null) {
  //   return <div>Loading...</div>; // Show a loading indicator while checking
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Student />} />
          <Route path='/create' element={<CreateStudent />} />
          <Route path='/update/:id' element={<UpdateStudent />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />


          {/* {isLoggedIn ? (
            <>
              <Route path='/' element={<Student />} />
              <Route path='/create' element={<CreateStudent />} />
              <Route path='/update/:id' element={<UpdateStudent />} />
              <Route path='/home' element={<Home />} />
              <Route path='/login' element={<Navigate to="/home" />} />
            </>
          ) : (
            <>
              <Route path='/login' element={<Login />} />
              <Route path='*' element={<Navigate to="/login" />} />
            </>
          )} */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
