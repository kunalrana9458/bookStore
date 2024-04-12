import React from 'react'
import Navbar from './Navbar'
import ContactUsForm from './ContactUsForm'

const ContactUs = () => {
  return (
    <div>
      <Navbar/>
      <div className='h-screen flex justify-center items-center'>
        <ContactUsForm/>
      </div>
    </div>
  )
}

export default ContactUs
