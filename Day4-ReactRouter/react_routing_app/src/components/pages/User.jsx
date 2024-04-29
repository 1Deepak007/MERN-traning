import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const params = useParams()
  return (
    <div>
        <h2 className='text-center'>Welcome {params.username}</h2>
        
    </div>
  )
}
