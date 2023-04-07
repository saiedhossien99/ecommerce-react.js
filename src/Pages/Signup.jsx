import { useNavigate,NavLink } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'


export default function Signup() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfrimPassword]=useState('');
    const nevigate=useNavigate();


    async function signup() {
      if(password!==confirmPassword)
     {
      alert('password did not match')
      return;
     }
    await  axios.post('http://localhost:5000/auth/register',{_name:name,_email:email,_password:password})
      .catch(function(err){
        console.log(err)
        return 
      })
      .then(
        nevigate('/')
      )

      
    } 

  return (
    <div className="grid items-center bg-gray-100 justify-center w-screen h-screen">
      <div className="shadow mt-16 bg-cyan-600 rounded w-80 h-96">
        <div className="mt-10 ml-5">
          <div>
            <label className="font-semibold text-xl text-gray-600 ml-1">
              Name
            </label>
          </div>
          <input
            placeholder="name"
            type="text"
            onChange={(e)=>setName(e.target.value)}
            className="ml-2 w-60 bg-gray-200 text-blue-900 
          focus:outline-none focus:ring focus:border-cyan-800"
          />
        </div>

        <div className="mt-4 ml-5">
          <div>
            <label className="font-semibold text-xl text-gray-600 ml-1">
              Email
            </label>
          </div>
          <input
            placeholder="abc@gmail.com"
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            className="ml-2 w-60 bg-gray-200 text-blue-900 
          focus:outline-none focus:ring focus:border-cyan-800"
          />
        </div>

        <div className="mt-4 ml-5">
          <div>
            <label className="font-semibold text-xl text-gray-600 ml-1">
              Password
            </label>
          </div>
          <input
            placeholder="password"
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            className="ml-2 w-60 bg-gray-200 text-blue-900 
          focus:outline-none focus:ring focus:border-cyan-800"
          />
        </div>

        <div className="mt-4 ml-5">
          <div>
            <label className="font-semibold text-xl text-gray-600 ml-1">
             confirm password
            </label>
          </div>
          <input
            placeholder="confrim password"
            type="password"
            id="confrimPassword"
            onChange={(e)=>setConfrimPassword(e.target.value)}
            className="ml-2 w-60 bg-gray-200 text-blue-900 
          focus:outline-none focus:ring focus:border-cyan-800"
          />
        </div>

        <div className="flex justify-center mr-6">
          <button className="bg-pink-600 mt-4 px-4 py-1 rounded"
          onClick={signup}
          >sign up</button>
        </div>

        <div className="mt-2 flex justify-center">
          <p>Have an account? </p>
          <NavLink to="/">
            <p className="underline">sign up</p>
          </NavLink>
        </div>
      </div>

      
    </div>
  );
}
