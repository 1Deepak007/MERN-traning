import React, { useState } from 'react';
import ViewData from './ViewData';
import MyForm from './MyForm';

export default function Form() {
  const [editUser, setEditUser] = useState(null);

  return (
    <div className='row'>
      <div className="col">
        <MyForm />
        {/* <MyForm user={editUser} resetEditUser={() => setEditUser(null)} /> */}
      </div>
      <div className="col">
        <ViewData setEditUser={setEditUser} />
      </div>
    </div>
  );
}











// import React from 'react'
// import ViewData from './ViewData'
// import MyForm from './MyForm'

// export default function Form() {
//   return (
//     <div className='row'>
//       <div className="col"><MyForm /></div>
//       <div className="col"><ViewData /></div>
//     </div>
//   )
// }