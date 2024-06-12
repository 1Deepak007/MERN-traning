import React from 'react'
import Navigationbar from './Navbar'

const Profile = () => {
  return (
    <>
      <Navigationbar />
      <div>
        <h2 className='text-center underline'>Profile</h2>
        <div className="container my-5">
          <table className='table'>
            <tr className='rounded-sm'>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default Profile
