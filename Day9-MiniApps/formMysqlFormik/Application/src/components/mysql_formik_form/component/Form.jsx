import React, { useState } from 'react';
import ViewData from './ViewData';
import MyForm from './MyForm';

export default function Form() {
  const [editUser, setEditUser] = useState(null);

  return (
    <div className='row'>
      <div className="col">
        {editUser ? (
          <MyForm user={editUser} resetEditUser={() => setEditUser(null)} />
        ) : (
          <MyForm />
        )}
      </div>
      <div className="col">
        <ViewData setEditUser={setEditUser} />
      </div>
    </div>
  );
}
