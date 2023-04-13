import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postClass, getSwimClasses } from '../../redux/swimClass/swimClass';
import '../../assets/styles/ClassCreate.css';

const ClassCreate = () => {
  const [className, setClassName] = useState('');
  const [classLocation, setClassLocation] = useState('');
  const [classFee, setClassFee] = useState('');
  const [classDescription, setClassDescription] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.swimClasses);
  const { postStatus } = useSelector((state) => state.swimClasses);

  const handleSubmit = (e) => {
    e.preventDefault();
    const classData = {
      name: className,
      location: classLocation,
      fee: classFee,
      description: classDescription,
    };
    dispatch(postClass(classData));
    dispatch(getSwimClasses());
  };

  const handleRedirect = () => {
    if (status === 'success' && postStatus === 'success') {
      navigate('/swimClass');
    }
  };

  const screen = (
    <>
      <section className="create-section">
        <h1>Create a class</h1>
        <form
          className="form-container"
          onSubmit={(e) => {
            handleSubmit(e);
            setTimeout(() => handleRedirect(), 3000);
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
            placeholder="description"
            name="classDescription"
            className="form-input"
            value={classDescription}
            onChange={(e) => setClassDescription(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="fee"
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
