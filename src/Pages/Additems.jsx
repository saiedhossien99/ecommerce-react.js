import { useState } from "react";

export default function Additems() {
  const [caltagory, setCatagory] = useState("");

  return (
    <div className="bg-cyan-800 w-screen h-screen items-center justify-center flex">
    <div className="grid grid-flow-cols grid-cols-2 items-center justify-center ">
      <div className="">
        <lebel>product name:</lebel>
        <input className="ml-2" type="text" placeholder="name" />
      </div>
      <div>
        <lebel>price:</lebel>
        <input className="ml-2" type="number" placeholder="0.0" />
      </div>
      <div className="mt-4">
        <lebel>insert an image</lebel>
        <input className="" type="file" />
      </div>
      <div className="mt-4 ml-1">
        <label>
          select catagory
          <select
            caltagory={caltagory}
            onChange={(e) => {
              setCatagory(e.target.value);
            }}
          >
            <option caltagory=""> </option>
            <option caltagory="men">men</option>
            <option caltagory="women">women</option>
            <option caltagory="electric">electric</option>
            <option caltagory="spots">sports</option>

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
        ></textarea>
      </div>
      <button className="bg-green-300 mt-14">insert item</button>
    </div>
    </div>
  );
}
