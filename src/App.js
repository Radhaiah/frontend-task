import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Home } from './Components/Home';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
        {/* creating routes */}
          <Route path="/" element={<Login/>}/>
          <Route path="/createuser" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
