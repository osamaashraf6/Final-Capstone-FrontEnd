import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postClass, getSwimClasses } from '../../redux/swimClass/swimClass';
import '../../assets/styles/ClassCreate.css';
import images from '../../assets/images/images';

const ClassCreate = () => {
  const [className, setClassName] = useState('');
  const [classLocation, setClassLocation] = useState('');
  const [classFee, setClassFee] = useState('');
  const [classDescription, setClassDescription] = useState('');
  const pointer = parseInt(
    JSON.parse(localStorage.getItem('pointer')) || 0,
    10,
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const classData = {
      name: className,
      location: classLocation,
      image: images[pointer],
      fee: classFee,
      description: classDescription,
    };
    dispatch(postClass(classData));
    dispatch(getSwimClasses());
    navigate('/swimClass');
    if (pointer === 4) JSON.stringify(localStorage.setItem('pointer', 0));
    else JSON.stringify(localStorage.setItem('pointer', pointer + 1));
  };

  const screen = (
    <>
      <section className="create-section">
        <h1>Create a class</h1>
        <form
          className="form-container"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            placeholder="Class name"
            name="className"
            className="form-input"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Location"
            name="classLocation"
            className="form-input"
            value={classLocation}
            onChange={(e) => setClassLocation(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Description"
            name="classDescription"
            className="form-input"
            value={classDescription}
            onChange={(e) => setClassDescription(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Fee"
            name="classFee"
            className="form-input"
            value={classFee}
            onChange={(e) => setClassFee(e.target.value)}
            required
          />
          <button type="submit" className="form-button button">
            Create Class
          </button>
        </form>
      </section>
    </>
  );

  return screen;
};

export default ClassCreate;
