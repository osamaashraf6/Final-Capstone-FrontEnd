/* eslint camelcase: "off" */
/* eslint-disable-next-line react/jsx-pascal-case */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swim_classes from './components/swim_class/swim_class';
import ClassCreate from './components/swim_class/classCreate';
import Swim_ClassDetails from './components/swim_class/swim_classDetails';
import ClassUpdate from './components/swim_class/swim_classUpadtes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="swim_class" element={<Swim_classes />} />
          <Route path="/swim_class/create" element={<ClassCreate />} />
          <Route path="/swim_class/:id" element={<Swim_ClassDetails />} />
          <Route path="/swim_class/:id/update" element={<ClassUpdate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
