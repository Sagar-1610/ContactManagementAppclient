import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  const [data,setData] = useState([]);

  useEffect(()=>{
    getContactData()
  },[])

  const getContactData = async ()=>{
    let result = await fetch("https://contact-management-app-t7pl.onrender.com/datalist")
    result  = await result.json()
    setData(result)
    console.log(result)
  } 

  const deleteData = async (id)=>{
    let result = await fetch(`https://contact-management-app-t7pl.onrender.com/data/${id}`,{
      method:"delete"
    })
    result = await result.json()
    if(result){
      getContactData()
    }
  }  

  const Search = async(event)=>{
    let key = event.target.value
    if(key){
    let result = await fetch(`https://contact-management-app-t7pl.onrender.com/search/${key}`);
    result  = await result.json();
      if(result){
        setData(result)
      }
    }
    else{
      getContactData()
    }

  }
  return (
    <div>
      <div className='h-full w-full flex items-center flex-col p-6'>
        <div className=' w-full xxs:w-full flex justify-center m-8'>
          <input type="text" onChange={Search} placeholder='Search...' className='p-2 w-1/2 xxs:w-2/3 font-semibold font-mono rounded-sm ' />
        </div>
        <ul className='flex justify-center border-2 xxs:w-full w-3/4'>
          <li className=' xxs:w-3/6 xxs:h-10  xxs:border-1 xxs:text-xms w-1/6  p-2 text-center font-semibold text-base'>Sr.no.</li>
          <li className=' xxs:w-3/6 xxs:h-10  xxs:border-1 xxs:text-xms w-1/6 p-2 text-center font-semibold text-base'>Name</li>
          <li className=' xxs:w-3/6 xxs:h-10  xxs:border-1 xxs:text-xms w-1/6 p-2 text-center font-semibold text-base'>Email</li>
          <li className=' xxs:w-3/6 xxs:h-10  xxs:border-1 xxs:text-xms w-1/6 p-2 text-center font-semibold text-base'>Phone</li>
          <li className=' xxs:w-3/6 xxs:h-10  xxs:border-1 xxs:text-xms w-1/6 p-2 text-center font-semibold text-base'>State</li>
          <li className=' xxs:w-3/6 xxs:h-10  xxs:border-1 xxs:text-xms w-1/6 p-2 text-center font-semibold text-base'>City</li>
          <li className=' xxs:w-3/6 xxs:h-10  xxs:border-1 xxs:text-xms w-1/6 p-2 text-center font-semibold text-base'>Operation</li>
        </ul>
       {data.length>0 ? data.map((item,index)=> <ul className='flex border-2 m-2 justify-center xxs:w-full  w-3/4'>
          <li className='  xxs:w-full  xxs:p-1  xxs:border-1 xxs:text-xxs w-1/6 p-2 xxs:p-0  text-center font-semibold text-base'>{index+1}</li>
          <li className='  xxs:w-full  xxs:m-1     xxs:p-0 xxs:border-1 xxs:text-xxs w-1/6 p-2 text-center font-semibold text-base'>{item.name}</li>
          <li className='  xxs:w-full  xxs:p-1   xxs:border-1 xxs:p-0  xxs:text-xxs w-1/6 p-2 text-center font-semibold text-base'>{item.email}</li>
          <li className='  xxs:w-full   xxs:p-1  xxs:border-1 xxs:text-xxs w-1/6 xxs:p-0 p-2 text-center font-semibold text-base'>{item.phone}</li>
          <li className='  xxs:w-full   xxs:p-1  xxs:border-1 xxs:text-xxs xxs:p-0  w-1/6 p-2 text-center font-semibold text-base'>{item.state}</li>
          <li className='  xxs:w-full  xxs:p-1 xxs:border-1 xxs:text-xxs xxs:p-0  w-1/6 p-2 text-center font-semibold text-base'>{item.city}</li>
          <li className='   xxs:h-15   xxs:p-1 xxs:border-1 xxs:text-xxs xxs:p-0  w-1/6 p-2 space-x-2 text-center text-base'>
            <Link to={"/update/"+item._id} ><button className='rounded-sm bg-orange-500 px-3 xxs:px-2 hover:bg-orange-700 text-white'>edit</button ></Link>
            <button onClick={()=>deleteData(item._id)} className=' rounded-sm bg-red-500 px-3 xxs:px-1 hover:bg-red-700 text-white' > delete</button>
          </li>
        </ul>
        
        ):<h1 className='text-3xl font-bold p-3'>No Data Found</h1> }
      </div>
    </div>
  )
}

export default Dashboard
