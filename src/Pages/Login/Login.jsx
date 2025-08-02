import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center overflow-hidden">
        <div className="bg-white shadow-lg px-6 py-6 w-full max-w-md rounded-2xl">
          <div className="heading font-bold text-center">Welcome to Say~Hello</div>
          <div className="text-center">Login to continue</div>
          <form className="flex flex-col py-3">
            <input
              className="border border-gray-200 rounded-md p-2 my-2"
              type="email"
              placeholder="Email"
            />
            <input
              className="border border-gray-200  rounded-md p-2 my-2"
              type="password"
              placeholder="Password"
            />
            <p className="my-1 cursor-pointer hover:underline">Forgot Password?</p>
            <button className="rounded-md bg-[#145fff] py-1 text-white m-2"><Link to="/home">Login</Link>
              
            </button>
          </form>
          <p className="text-center cursor-pointer">Don't have a account? <Link to="/signup" className="underline">Register here</Link></p>
        </div> 
      </div>
    </>
  );
};

export default Login;
