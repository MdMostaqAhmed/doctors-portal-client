
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';

import Contact from './Pages/Home/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto sm:px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appointment' element={<Appointment />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
