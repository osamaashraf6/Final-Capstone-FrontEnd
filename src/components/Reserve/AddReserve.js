import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postBooking, setStatus } from '../../redux/bookings/bookings';

const AddReserve = () => {
  const [bookingDate, setBookingDate] = useState('');
  const [bookingDateEnd, setBookingDateEnd] = useState('');

  const { id } = useParams();
  const idToUse = Number(id);
  const { status } = useSelector((state) => state.bookings);

  const dispatch = useDispatch();
  const idUser = JSON.parse(localStorage.getItem('user')).id;
  let message = '';

  useEffect(() => {
    dispatch(setStatus());
  });

  if (status === 'success') {
    message = <h3>Booking Created</h3>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      booking: {
        start_time: bookingDate,
        end_time: bookingDateEnd,
        swim_class_id: idToUse,
      },
      user: {
        user_id: idUser,
      },
    };
    dispatch(postBooking(data));
  };

  const screen = (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="label">
        <span>From:</span>
        <input
          id="date-"
          type="date"
          placeholder="start date"
          name="bookingDate"
          className="form-input"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
          required
        />
      </div>

      <div className="label">
        <span>To:</span>
        <input
          id="date-end"
          type="date"
          placeholder="end date"
          name="bookingDateEnd"
          className="form-input"
          value={bookingDateEnd}
          onChange={(e) => setBookingDateEnd(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="form-button button">
        Book
      </button>
      {message}
    </form>
  );

  return screen;
};

export default AddReserve;
