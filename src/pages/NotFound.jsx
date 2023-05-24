import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center border' style={{height:"80vh"}}>
      <p className='text-dark display-4 '>Page Not Found</p>
      <Link to={"/"}>Anasayfaya Git</Link>
    </div>
  )
}

export default NotFound
