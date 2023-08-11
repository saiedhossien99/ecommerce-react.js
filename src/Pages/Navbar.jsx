export default function Navbar() {
  return (
    <ul className="flex">
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="/">
          Home
        </a>
      </li>
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="#">
          electonics 
        </a>
      </li>
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="#">
        groceries
        </a>
      </li>
      <li className="mr-6">
        <a className="text-gray-400 cursor-not-allowed" href="#">
          fashion
        </a>
      </li>
    </ul>
  );
}
