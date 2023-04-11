/* eslint camelcase: "off" */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import {
  deleteClass,
  getSwim_classes,
} from '../../redux/swim_class/swim_class';
import BookingCreate from '../booking/BookingCreate';
import '../../assets/styles/ClassDetails.css';

const Swim_ClassDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { swim_classes } = useSelector((state) => state.swim_classes);
  const { status } = useSelector((state) => state.swim_classes);
  const swim_class = swim_classes.find(
    (swim_class) => swim_class.id === Number(id),
  );
  const { role } = JSON.parse(localStorage.getItem('user'));
  let screen;

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteClass(id));

    setTimeout(() => dispatch(getSwim_classes()), 3000);
    if (status === 'success') {
      navigate('/swim_class');
    }
  };

  if (status === 'success') {
    screen = (
      <>
        <section className="class-details-section">
          <div className="details-img">
            <img src={swim_class.image} alt="class-img" />
          </div>

          <div className="details-info">
            <h3>{swim_class.class_name}</h3>
            <h3>{swim_class.location}</h3>
            <div>
              <p>
                Class are Available:
                {swim_class.description}
              </p>
              <h4>
                monthly Fee:
                {' '}
                <span className="fee">
                  {swim_class.fee}
                  {' '}
                  $
                  {' '}
                </span>
              </h4>
              {' '}
            </div>
          </div>

          <div className="details-buttons-form">
            {role === 'admin' && (
              <div className="details-buttons">
                {' '}
                <button
                  className="button delete"
                  type="button"
                  onClick={(e) => handleDelete(e, id)}
                >
                  Delete class
                </button>
                <button
                  className="button delete"
                  type="button"
                  onClick={() => navigate(`/swim_classes/${id}/update`)}
                >
                  Update Class
                </button>
              </div>
            )}

            {role === 'user' && (
              <>
                {' '}
                <h2>Book this class </h2>
                {' '}
                <BookingCreate />
              </>
            )}
          </div>
        </section>
      </>
    );
  } else {
    screen = (
      <h3>
        {status}
        ...
      </h3>
    );
  }
  return screen;
};

export default Swim_ClassDetails;
