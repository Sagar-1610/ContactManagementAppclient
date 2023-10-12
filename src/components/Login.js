import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate  = useNavigate();
  
  useEffect(()=>{
    const auth= localStorage.getItem("user");
    if(auth){
      navigate("/")
    }
  })

  const Login = async()=>{
    let result = await fetch("https://contact-management-app-t7pl.onrender.com/login",{
      method:'post',
      body:JSON.stringify({email,password}),
      headers:{
        "Content-Type":"application/json"
      }
    })
    result = await result.json()
    console.log(result)
    if(result.name){
      localStorage.setItem("user",JSON.stringify(result))
      navigate("/")

    }
    else{
      alert("Please enter the your corect details")
    }

  
  }
  return (
    <div>
      <div className="w-full h-full flex flex-col items-center pt-32">
        <div className="font-bold text-3xl p-2 ">Login</div>
        <div className=" w-full flex flex-col items-center mt-8">
          <input
            type="email"
            placeholder="enter your email"
            className=" w-1/3 p-2 rounded-sm xxs:w-2/3"
            value={email} onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="enter your password"
            className=" w-1/3 p-2 rounded-sm xxs:w-2/3"
            value={password} onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <div className="w-full flex justify-center ">
            <button onClick={Login} className="xxs:w-2/3 rounded-sm bg-blue-700 font-semibold text-white w-1/3 p-2 hover:bg-blue-800">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
