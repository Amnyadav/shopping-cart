import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';



function App() {
  
  return (
    <div className="w-full h-screen overflow-y-scroll">
      <div className='bg-slate-900'>
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home ></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
