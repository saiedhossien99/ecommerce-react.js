import { useEffect,useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate=useNavigate();
  const[Reload,setReload]=useState(false);
  function logout(){
    localStorage.removeItem('token')
    setReload(!Reload);
    
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
