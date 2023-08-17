
import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {

 const[Reload,setReload]=useState(false);
 function logout(){
  localStorage.removeItem("token");
    setReload(!Reload);
 }

  return (
    <ul className="flex">
      <li className="mr-6">
        <CustomLink className="text-blue-500 hover:text-blue-800" href="/">
          Home
        </CustomLink>
      </li>
      <li className="mr-6">
        <CustomLink className="text-blue-500 hover:text-blue-800" href="/electronics">
          electonics 
        </CustomLink>
      </li>
      <li className="mr-6">
        <CustomLink className="text-blue-500 hover:text-blue-800" href="/groceries">
        groceries
        </CustomLink>
      </li>
      <li className="mr-6">
        <CustomLink className="text-gray-400 " href="/fashion">
          fashion
        </CustomLink>
      </li>
      <button style={{marginLeft:"5px",borderRadius:'25%,10%'}}
      onclick={logout}
    >Log out</button>
    </ul>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
