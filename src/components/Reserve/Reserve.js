import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookings } from '../../redux/bookings/bookings';
import '../../assets/styles/Bookings.css';

const Bookings = () => {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookings);
  const user = JSON.parse(localStorage.getItem('user'));
  const [items, setItems] = useState([]);
  const id = user ? user.id : 0;

  useEffect(() => {
    dispatch(getBookings(id));
  }, [dispatch, id]);

  useEffect(() => {
    fetch('https://rails-i4jr.onrender.com/swim_classes')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, []);
  const ids = [];
  bookings.forEach((book) => ids.push(book.bookingClassId));
  const filtered = items.filter((item) => ids.includes(item.id));

  return (
    <>
      <section className="bookings">
        <h1>Reservations</h1>
        <table className="bookings-list">
          <thead className="thead">
            <tr>
              <th>Class</th>
              <th>Description</th>
              <th>Location</th>
              <th>Monthly Fee</th>
            </tr>
          </thead>
          <tbody className="thead">
            {filtered.map((item) => (
              <tr key={item.bookingId}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.location}</td>
                <td>{item.fee}$</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};
export default Bookings;
