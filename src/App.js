import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/swimClass/classList';
import ClassDetails from './components/swimClass/classDetails';
import Reserve from './components/Reserve/Reserve';
import AddReserve from './components/Reserve/AddReserve';
import Authentication from './components/signup/authentication';

// styles
import './App.css';
import './components/Navbar/navbar.css';
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
