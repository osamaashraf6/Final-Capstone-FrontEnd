import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.js';
import Home from './pages/Home.js';
import Reserve from './pages/Reserve.js';
import AddReserve from './pages/AddReserve.js';
import SignUp from './pages/SignOut.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignOut from './pages/SignOut.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/*  */}
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          {/*  */}
          <Route path="Reserve" element={<Reserve />} />
          {/*  */}
          <Route path="SignUp" element={<SignOut />} />
          {/*  */}
          <Route path="AddReserve" element={<AddReserve />} />
          {/*  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
