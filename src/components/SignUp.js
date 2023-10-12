import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import "../../src/App.css"
const SignUp = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [gender,setGender] = useState('');
  const [password,setPassword] = useState('');
  const [question,setQuestion] = useState([]);
  const [state,setState] = useState("");
  const [city,setCity] = useState("");
  const navigate = useNavigate();
  

  
  const getCheckBox =(e)=>{
    const {value,checked} = e.target
    if(checked){
      setQuestion([...question,value])
    }else{
      setQuestion([question.filter((e)=>e!==value)])
    }
  }
  const dataCollection = async()=>{
   let result = await fetch("https://contact-management-app-t7pl.onrender.com/signup",{
    method:"post",
    body:JSON.stringify({name,email,phone,gender,password,question,state,city}),
    headers:{
      "Content-Type":"application/json"
    }
   })
   result  = await result.json();
   localStorage.setItem("user",JSON.stringify(result))
   if(result){
    navigate("/")
   }
   
  }

  useEffect(()=>{
    const auth= localStorage.getItem("user");
    if(auth){
      navigate("/")
    }
  })


  return (
    <div className="h-full w-full flex items-center pt-4 flex-col">
      <h1 className="font-bold text-3xl  xxs:text-2xl">Sign Up</h1>
     
        <div className=" w-screen flex flex-col items-center h-full m-2 ">
          <input type="text" placeholder="Enter Name" className=" w-1/3 xxs:w-2/3 mt-2 p-1  rounded-sm" value={name} onChange={(e)=>setName(e.target.value)} required/>
          <br />
          <input type="email" placeholder="Enter Email" className="w-1/3 xxs:w-2/3 mt-2 p-1 rounded-sm" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          <br />
          <input type="text" placeholder="Enter Phone" className="w-1/3 xxs:w-2/3 mt-2 p-1 rounded-sm" value={phone} onChange={(e)=>setPhone(e.target.value)} required />
          <br />
          <div className="text-base xxs:text-sm xxs:w-4/5 m-2 font-semibold w-1/3 ">
            <span className="">Gender:</span>
            <input type="radio" name="gender" value="male" className="w-8 h-5 ml-2" onChange={(e)=>setGender(e.target.value)} required/>
            <span className="">Male</span>
            <input type="radio" name="gender" value="female"  className="w-8 h-5"  onChange={(e)=>setGender(e.target.value)} required/>
            <span  className="">Female</span>
            <input type="radio" name="gender" value="others" className="w-8 h-5"  onChange={(e)=>setGender(e.target.value)} required/>
            <span  className="">Others</span>
          </div>
          <div className="text-base m-2 font-semibold w-1/3">
            <p  className="">How did you here about this?</p>
            <input type="checkbox" className="w-4 h-4 " value="Linkedln" onChange={(e)=>getCheckBox(e)} required/>
            <span  className="">Linkedln</span>
            <br />
            <input type="checkbox" className="w-4 h-4"  value="Friends" onChange={(e)=>getCheckBox(e)} required/>
            <span  className="">Friends</span>
            <br />
            <input type="checkbox" className="w-4 h-4"  value="Job Portal" onChange={(e)=>getCheckBox(e)}  required/>
            <span  className="">Job Portal</span>
            <br />
            <input type="checkbox"  className="w-4 h-4"  value="others" onChange={(e)=>getCheckBox(e)} required/>
            <span  className="">Others</span>
          </div>
          <div className="flex w-1/2 xxs:w-full  m-4 justify-center text-base font-semibold">
              <p className="p-1 ">City</p>
              <select className="w-1/4 mr-7 xxs:w-1/5 rounded-sm" onChange={(e)=>setCity(e.target.value)} required>
                <option value="Mumbai"></option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Ahmedabad">Ahemdabad</option>
              </select>
              <p className="ml-5 p-1 xxs:ml-0 ">State</p>
              <select name="" id=""  className="w-1/4 rounded-sm xxs:w-1/5" onChange={(e)=>setState(e.target.value)} required>
                <option value=""></option>
                <option value="Mumbai">Maharashtra</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
              </select>
          </div>
          <div className=" w-screen flex flex-col items-center ">
            <input type="password" placeholder="Enter Password" className="w-1/3 xxs:w-2/3 mt-2 p-1 rounded-sm" value={password} onChange={(e)=>setPassword(e.target.value)} required />
          </div>
          <div className="w-full flex justify-center mt-4 pb-4">
            <button onClick={dataCollection} className="bg-blue-700 font-semibold text-white w-1/3 xxs:w-2/3 p-2 hover:bg-blue-800 rounded-sm">Sign up</button>
          </div>
        </div>
    </div>
  );
};

export default SignUp;
