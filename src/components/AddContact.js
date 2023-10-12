import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
const AddContact = () => {
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState("");
  const [name,setName] = useState("");
  const [state,setState] = useState("");
  const [city,setCity] = useState("");
  const navigate = useNavigate();

  const AddContact = async()=>{
    console.log(name,email,phone,state,city)
    const userId = JSON.parse(localStorage.getItem("user"))._id
    let result  = await fetch("https://contact-management-app-t7pl.onrender.com/addContact",{
      method:"post",
      body:JSON.stringify({name,email,phone,state,city,userId}),
      headers:{
        "Content-Type":"application/json"
      }
    })
    result = await result.json();
    if(result){
      navigate("/")
    }
    
  }

  return (
    <div>
        <div>
      <div className="w-full h-full flex flex-col items-center pt-10">
        <div className="font-bold text-3xl xxs:text-2xl p-2">Add Contact</div>
        <div className=" w-full flex flex-col items-center mt-8">
        <input
            type="text"
            placeholder="enter your name"
            className=" w-1/3 xxs:w-2/3 p-2"
            value={name} onChange={(e)=>setName(e.target.value)}
          />
          <br />
          <input
            type="email"
            placeholder="enter your email"
            className=" w-1/3 xxs:w-2/3 p-2"
            value={email} onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="enter your phone"
            className=" w-1/3 xxs:w-2/3 p-2"
            value={phone} onChange={(e)=>setPhone(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="enter your state"
            className=" w-1/3 xxs:w-2/3 p-2"
            value={state} onChange={(e)=>setState(e.target.value)}
          />
          <br/>
          <input
            type="text"
            placeholder="enter your city"
            className=" w-1/3 xxs:w-2/3 p-2"
            value={city} onChange={(e)=>setCity(e.target.value)}
          />
          <br/>
          <div className="w-full flex justify-center">
            <button onClick={AddContact} className="bg-blue-700 font-semibold text-white xxs:w-2/3 w-1/3 p-2 hover:bg-blue-800">
              Add Contact
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AddContact
