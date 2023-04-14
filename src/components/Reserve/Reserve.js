import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookings } from '../../redux/bookings/bookings';
import '../../assets/styles/Bookings.css';

const Bookings = () => {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookings);
  const { id } = JSON.parse(localStorage.getItem('user'));
  const [items, setItems] = useState([]);

  useEffect(() => {
    dispatch(getBookings(id));
  }, [dispatch, id]);

  useEffect(() => {
    fetch('https://rails-wout.onrender.com/swim_classes')
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
        <h1>RESERVATION LISTS</h1>
        <table className="bookings-list">
          <thead className="thead">
            <tr>
              <th>CLASS</th>
              <th>description</th>
              <th>location</th>
              <th>MONTHLY FEE</th>
            </tr>
          </thead>
          <tbody className="thead">
            {filtered.map((item) => (
              <tr key={item.bookingId}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.location}</td>
                <td>
                  {item.fee}
                  $
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};
export default Bookings;
