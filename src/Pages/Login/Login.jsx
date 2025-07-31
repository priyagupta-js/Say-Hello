import React from "react";

const Login = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center overflow-hidden">
        <div className="bg-white shadow-lg px-6 py-6 w-full max-w-md rounded-2xl">
          <div className="heading font-bold text-center">Welcome to Say~Hello</div>
          <div className=" text-center">Login to continue</div>
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
            <button className="rounded-md bg-[#145fff] py-1 text-white m-2">
              Login
            </button>
          </form>
          {/* <p className="text-center"> -- or sign in with -- </p> */}
        </div> 
      </div>
    </>
  );
};

export default Login;
