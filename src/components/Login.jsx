import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {useForm} from "react-hook-form"



const LoginModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
return (
    <>
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-md shadow-lg w-96 relative">
        <form onSubmit={handleSubmit(LoginModal)} method="dialog">
          {/* if there is a button in from, it will close the modal */}
          <Link 
          to="/" 
          className="btn-sm btn-circle btn-ghost absolute right-2 top"
          onClick={() => Document.getElementById("LoginModal").close()}>
            ✕
          </Link>

          <h3 className="font-bold text-lg">Login</h3>
          {/* Email */}
          <div className="mb-4 space-y-2">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", { required: true })}
            />
            <br />
             {errors.email && ( <span className="text-sm text-red-500">
              This field is required</span>)}
          </div>
          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && ( <span className="text-sm text-red-500">
              This field is required</span>)}
          </div>
          {/* Button */}
          <div className="flex justify-between items-center">
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700">
              Login
            </button>
            <p className="text-sm">
              Not registered?{" "}
              <Link to="/signup" className="underline text-blue-500">
                Signup
              </Link>
            </p>
          </div>
          </form>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginModal;
