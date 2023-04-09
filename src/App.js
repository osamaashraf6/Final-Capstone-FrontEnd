import { BrowserRouter, Route, Routes } from 'react-router-dom';

// eslint-disable-next-line import/extensions
import Navbar from './components/Navbar/Navbar.js';

// eslint-disable-next-line import/extensions
import Home from './pages/Home.js';

// eslint-disable-next-line import/extensions
import Reserve from './pages/Reserve.js';
// eslint-disable-next-line import/extensions

// eslint-disable-next-line import/extensions
import AddReserve from './pages/AddReserve.js';

// eslint-disable-next-line import/extensions

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line import/extensions

// eslint-disable-next-line import/extensions
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
