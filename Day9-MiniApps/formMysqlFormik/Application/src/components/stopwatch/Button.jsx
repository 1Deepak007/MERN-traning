import React from 'react'

const Button = ({label,onclick}) => {
  return (
    <>
        <button onClick={onclick} className="btn btn-primary me-2">{label}</button> 
    </>
  )
}

export default Button
