
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import {Route,Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className=''>
    <Routes>
      <Route path='' element={<Login/>} />
      <Route path='/signup'element={<Signup/>}/>
    </Routes>
    </div>
  );
}

export default App;
