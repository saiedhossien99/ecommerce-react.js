
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
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
        <CustomLink className="text-gray-400 cursor-not-allowed" href="/fashion">
          fashion
        </CustomLink>
      </li>
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
