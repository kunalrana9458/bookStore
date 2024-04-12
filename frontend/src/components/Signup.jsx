import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'


const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data)
  return (
     <>
        <div>
        <div id="my_modal_3" className="flex h-screen items-center justify-center border">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          <h3 className="font-bold text-lg">Sign Up</h3>
          <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input type="text"
                placeholder="Enter Your Full Name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })} /> <br />
                {errors.name && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })} /> <br />
                {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input type="password"
                placeholder="Enter Your Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })} /> <br />
                {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            {/* button  */}
            <div className="flex justify-around mt-4">
                <button
                className="bg-pink-500 text-white rounded-lg
                px-3 py-2 hover:bg-pink-700 duration-200">Signup</button>
                <p>Have Account ? <Link
                className="underline text-blue-500 cursor-pointer"
                to='/'>Login</Link> </p>
            </div>
            </form>
        </div>
      </div>
        </div>
     </>
  )
}

export default Signup
