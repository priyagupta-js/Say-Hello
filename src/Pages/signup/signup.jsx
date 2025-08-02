import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center ">
        <div className="bg-white shadow-lg px-6 py-6 w-full max-w-md rounded-2xl">
          <h1 className="heading font-bold text-center">Say Hello</h1>
          <h3 className="text-center">Create an Account</h3>
          <form className="flex flex-col py-3 ">
            <input className="border border-gray-200 rounded-md p-2 my-2"
              type="text"
              placeholder="FullName" />
            <input  className="border border-gray-200 rounded-md p-2 my-2"
              type="email"
              placeholder="Email" />
            <input className="border border-gray-200  rounded-md p-2 my-2"
              type="password"
              placeholder="Password" />
              <button className="rounded-md bg-[#145fff] py-1 text-white m-2">
              Signup
            </button>
          </form>
          <p className="text-center cursor-pointer">Already a member? <Link to="/" className="underline">Login here</Link></p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
