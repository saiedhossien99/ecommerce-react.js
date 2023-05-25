import axios from "axios";
import { useState } from "react";

export default function Additems() {
  
  const [name,setname]=useState('');
  const [price,setprice]=useState('');
  const [desc,setdesc]=useState('');
  const [catagory, setCatagory] = useState('');
  const [image,setimage]=useState('');

  function insert()
  {
   
  }

  return (
    <div className="bg-cyan-800 w-screen h-screen items-center justify-center flex">
    <div className="grid grid-flow-cols grid-cols-2 items-center justify-center ">
      <div className="">
        <lebel>product name:</lebel>
        <input className="ml-2" type="text"
        onChange={(e)=>{setname(e.target.value)}}
        placeholder="name" />
      </div>
      <div>
        <lebel>price:</lebel>
        <input className="ml-2" 
        onChange={(e)=>{setprice(e.target.value)}}
        type="number"
        placeholder="0.0" />
      </div>
      <div className="mt-4">
        <lebel>insert an image</lebel>
        <input className=""
        id="image"
        type="file"
        onChange={(e)=>{setimage(e.target.files[0])}}
        />
      </div>
      <div className="mt-4 ml-1">
        <label>
          select catagory
          <select
            onChange={(e) => {
              setCatagory(e.target.value);
            }}
          >
            <option catagory=""> </option>
            <option catagory="men">men</option>
            <option catagory="women">women</option>
            <option catagory="electric">electric</option>
            <option catagory="spots">sports</option>

          </select>
        </label>
      </div>

      <div className="mt-3">
        <h2>description :</h2>
        <textarea
          rows="4"
          cols="50"
          placeholder="write description"
          name="description"
          onChange={(e)=>{setdesc(e.target.value)}}
        ></textarea>
      </div>
      <button className="bg-green-300 mt-14"
      onClick={insert}
      >insert item</button>
    </div>
    </div>
  );
}
