/* eslint-disable import/extensions */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/swimClass/classList';
import ClassDetails from './components/swimClass/classDetails';
import Reserve from './components/reserve/reserve';
import AddReserve from './components/reserve/addReserve';
import Authentication from './components/signup/authentication';

// styles
import './App.css';
import './components/navbar/navbar.css';
import './components/swimClass/swimClass.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="main">
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="swimClass" element={<Home />} />
            <Route path="swimClass/:id" element={<ClassDetails />} />
            <Route path="reserve" element={<Reserve />} />
            <Route path="addReserve" element={<AddReserve />} />
            <Route path="signup" element={<Authentication />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
