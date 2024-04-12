import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'


const ContactUsForm = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div>
       <div className="modal-box w-[500px]">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          <h2 className="font-bold text-2xl">Contact Us</h2>
            <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input type="text"
                placeholder="Enter Your Name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}  /> <br />
                {errors.name && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="mt-4 space-y-2">
                <span>Mobile No.</span>
                <br />
                <input type="number"
                placeholder="Enter Your Mobile No."
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("number", { required: true })}  />
                {errors.number && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("number", { required: true })}  /> <br />
                {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <input type="message"
                placeholder="Enter Your Message"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("message", { required: true })}  /> <br />
                {errors.number && <span className="text-red-500">This field is required</span>}
            </div>
            <button 
            className='bg-pink-500 text-white rounded-lg
                px-3 py-2 hover:bg-pink-700 duration-200 my-4'>Send</button>
          </form>
        </div>
    </div>
  )
}

export default ContactUsForm
