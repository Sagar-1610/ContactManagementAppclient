import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Header = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logOut  = ()=>{
    localStorage.clear()
    navigate("/signup")
    
  }
  return (
    <div className='w-full  h-1/8 header'>
      <nav>
        {auth?<ul className='flex items-center justify-center p-6 xxs:space-x-6 xxs:text-center space-x-16  xxs:text-sm text-xl font-semibold font-mono '>
            <Link to="/"><li>DASHBOARD</li></Link>
            <Link to="/addcontact"><li>ADD-CONTACT</li></Link>
            <Link to="/signup" onClick={logOut}><li>LOGOUT({JSON.parse(auth).name})</li></Link>
        </ul>
        :
        <ul className='flex items-center  text-xl justify-center p-6 space-x-16 font-semibold font-mono '>
            <Link to="/login"><li className=''>LOGIN</li></Link> 
            <Link to="/signup"><li>SIGN UP</li></Link>
        </ul>
        }
      </nav>
    </div>
  )
}

export default Header
