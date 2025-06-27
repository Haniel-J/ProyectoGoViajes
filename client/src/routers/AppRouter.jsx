import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home'
import Login from '../pages/login/Login';
import About from '../pages/about/About'
import Destination from '../pages/destination/Destination'
import Register from '../pages/login/Register'


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/destination' element={<Destination />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default AppRouter;
