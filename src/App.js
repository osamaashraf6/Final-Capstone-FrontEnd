import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/swimClass/classList';
import ClassCreate from './components/swimClass/createClass';
import ClassDetails from './components/swimClass/classDetails';
import Bookings from './components/Reserve/Reserve';
import AddReservation from './components/Reserve/AddReserve';
import Authentication from './components/signup/authentication';

// styles
import './App.css';
import './components/Navbar/navbar.css';
import './components/swimClass/swimClass.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <>
    <BrowserRouter>
      <div className="main">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="swimClass" element={<Home />} />
          <Route path="add-class" element={<ClassCreate />} />
          <Route path="swimClass/:id" element={<ClassDetails />} />
          <Route path="reservations" element={<Bookings />} />
          <Route
            path="swimClass/:id/addReserve"
            element={<AddReservation />}
          />
          <Route path="signup" element={<Authentication />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
);

export default App;
