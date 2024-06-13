import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();





// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
// import Navbar from './components/utils/Navigationbar';

// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 4000;


// app.listen(PORT, () => {
//   console.log(`Proxy server running on port ${PORT}`);
// });



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       {/* <Navbar /> */}
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// reportWebVitals();