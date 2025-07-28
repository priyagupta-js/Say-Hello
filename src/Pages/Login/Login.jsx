import React from "react";

const Login =() =>{
    return(
        <>
           <div className="flex flex-col my-2 mx-auto bg-white rounded-2xl max-w-sm px-6 py-8 w-full">
            <div className="text-2xl font-bold text-center mb-2 px-6">Welcome to SAY HELLO </div>
            <div className=" flex flex-col">
            <form className="flex flex-col space-y-4">
                <input className="w-full px-4" type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button className="bg-blue-300 py-4">Login</button>
            </form>
            </div>
           </div>
        </>
    );
}

export default Login;