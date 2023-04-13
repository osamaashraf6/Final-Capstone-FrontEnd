import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { deleteClass, getSwimClasses } from '../../redux/swimClass/swimClass';
import AddReserve from '../Reserve/AddReserve';
// import '../../assets/styles/ClassDetails.css';

const ClassDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { swimClasses } = useSelector((state) => state.swimClasses);
  const { status } = useSelector((state) => state.swimClasses);
  const swimClass = swimClasses.find(
    (swimClass) => swimClass.id === Number(id),
  );

  let screen;

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteClass(id));

    setTimeout(() => dispatch(getSwimClasses()), 3000);
    if (status === 'success') {
      navigate('/swimClass');
    }
  };

  if (status === 'success') {
    screen = (
      <>
        <section className="class-details-section">
          <div className="details-img">
            <img src={swimClass.image} alt="class-img" />
          </div>

          <div className="details-info">
            <h3>{swimClass.class_name}</h3>
            <h3>{swimClass.location}</h3>
            <div>
              <p>
                Class are Available:
                {swimClass.description}
              </p>
              <h4>
                monthly Fee:
                {' '}
                <span className="fee">
                  {swimClass.fee}
                  {' '}
                  $
                  {' '}
                </span>
              </h4>
              {' '}
            </div>
          </div>

          <div className="details-buttons-form">
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
                onClick={() => navigate(`/swimClasses/${id}/update`)}
              >
                Update Class
              </button>
            </div>
            )
            {' '}
            <h2>reserve this class </h2>
            {' '}
            <AddReserve />
          </div>
        </section>
      </>
    );
  }
  return screen;
};

export default ClassDetails;
