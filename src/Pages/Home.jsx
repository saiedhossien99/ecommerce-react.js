import { useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate=useNavigate();
  function logout(){
    localStorage.removeItem('token')
    
  }
  useEffect(
    ()=>{
      if(!localStorage.getItem('token'))
      {
        navigate('/')
      }
    }
  )

  return (
    <div>
      <Navbar/>
      <h2>home</h2>
      <button className="bg-red-600" onClick={logout}>logout</button>
    </div>
  );
}
