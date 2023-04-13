/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBookings } from '../../redux/bookings/bookings';
import '../../assets/styles/addReserve.css';

function AddReservation() {
  const dispatch = useDispatch();
  const [date] = useState('');
  const { id } = useParams();

  const idToUse = Number(id);
  const navigate = useNavigate();

  const createReserve = (event) => {
    event.preventDefault();
    dispatch(
      getBookings({
        date,
        swim_class_id: idToUse,
      }),
    );
    navigate('/reservations');
  };
  return (
    <div className="add-reserve">
      <div className="r_container">
        <h1 className="title">Reserve a Class</h1>
        <hr className="hr" />
        <p className="about-class">
          ATO swim classes are available for infants, children, teens, and
          adults. And regardless of where you take your swimming lessons, you
          can expect caring, patient, and safe instruction from trained,
          professional instructors who can help even the most timid of swimmers
          learn to enjoy the water. Every beginner class starts with the basics,
          like becoming comfortable in the water and learning safety and basic
          strokes, then moves on to stroke development, refinement and
          improvement, then developing ease and efficiency in the water. In
          addition to Red Cross swimming classes, we also have a free app that
          can help you stay motivated between classes and progress to the next
          level.
        </p>

        <form className="reserve-form mt-5 pt-5" onSubmit={createReserve}>
          <input type="text" placeholder="City" id="city" name="city" />
          <button className="btn" id="btn" type="submit">
            Reserve
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddReservation;
