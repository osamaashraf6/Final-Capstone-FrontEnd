/* eslint-disable import/extensions */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Reserve from './pages/Reserve';
import AddReserve from './pages/AddReserve';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignOut from './pages/SignOut';
import HomeDetails from './components/Home/HomeDetails/HomeDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/*  */}
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="/swimClass/:id" element={<HomeDetails />} />
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
