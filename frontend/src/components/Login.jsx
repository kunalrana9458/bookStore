import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"
import axios from "axios";
import { toast } from 'react-hot-toast';


const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    const userInfo = {
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:3000/login",userInfo)
    .then((res) => {
      console.log(res.data);
      if(res.data){
        toast.success("Login Successfull")
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((err) => {
      if(err.response){
        console.log(err);
        toast.error("Error:"+ err.response.data.message)
      }
    })
  }
  const closeModal = () => {
    navigate('/')
  }
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onSubmit={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}  />
                {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input type="password"
                placeholder="Enter Your Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}  />
                {errors.password && <span className="text-red-500">This field is required</span>}
            </div>
            {/* button  */}
            <div className="flex justify-around mt-4">
                <button
                className="bg-pink-500 text-white rounded-lg
                px-3 py-2 hover:bg-pink-700 duration-200">Login</button>
                <p>Not Registered ? <Link
                className="underline text-blue-500 cursor-pointer"
                to='/signup'>Signup</Link> 
                </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
