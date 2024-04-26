import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'

const Courses = () => {
  return (
     <>
        <Navbar/>
        <div className='h-screen'>
        <Course/>
        <Footer/>
        </div>
     </>
  )
}

export default Courses
