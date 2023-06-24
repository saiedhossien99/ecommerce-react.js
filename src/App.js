
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Admin from './Admin/Admin';
import Additems from './Admin/Additems'
import {Route,Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className=''>
    <Routes>
      <Route path='' element={<Login/>} />
      <Route path='/signup'element={<Signup/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/admin' element={<Admin/>} />
      <Route path='/additems' element={<Additems/>}/>
    </Routes>
    </div>
  );
}

export default App;
