/* eslint camelcase: "off" */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  updateClass,
  getSwim_classes,
} from '../../redux/swim_class/swim_class';
import '../../assets/styles/ClassCreate.css';
// import Navbar from '../navbar/Navbar';

const ClassUpdate = () => {
  const [className, setClassName] = useState('');
  const [classLocation, setClassLocation] = useState('');
  const [classFee, setClassFee] = useState('');
  const [classImage, setClassImage] = useState('');
  const [classDescription, setClassDescription] = useState('');
  const { swim_classes } = useSelector((state) => state.swim_classes);
  const { id } = useParams();
  const idToUse = Number(id);
  const swim_class = swim_classes.find(
    (swim_class) => swim_class.id === idToUse,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSwim_classes());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const classData = {
      id: idToUse,
      class_name: className,
      location: classLocation,
      fee: classFee,
      image: classImage,
      description: classDescription,
    };
    dispatch(updateClass(classData));
    navigate('/swim_class');
  };

  const screen = (
    <>
      <section className="create-section">
        <h1>
          Update
          {swim_class.class_name}
        </h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={swim_class.location}
            name="location"
            className="form-input"
            value={classLocation}
            onChange={(e) => setClassLocation(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder={swim_class.class_name}
            name="className"
            className="form-input"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder={swim_class.image}
            name="classImage"
            className="form-input"
            value={classImage}
            onChange={(e) => setClassImage(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder={swim_class.description}
            name="classDescription"
            className="form-input"
            value={classDescription}
            onChange={(e) => setClassDescription(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder={swim_class.fee}
            name="classFee"
            className="form-input"
            value={classFee}
            onChange={(e) => setClassFee(e.target.value)}
            required
          />
          <button type="submit" className="form-button button">
            Update
          </button>
        </form>
      </section>
    </>
  );

  return screen;
};

export default ClassUpdate;
