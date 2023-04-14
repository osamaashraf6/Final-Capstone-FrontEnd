import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../assets/styles/addReserve.css';

const AddReservation = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const createReserve = (event) => {
    event.preventDefault();
    if (!user) {
      alert('Please Sign In or Sign Up First');
      navigate('/signup');
    } else {
      try {
        fetch('https://rails-wout.onrender.com/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_id: user.id, swim_class_id: id }),
        });
      } catch (error) {
        console.error('Failed to create user', error);
      }
      navigate('/reserve');
    }
  };

  return (
    <div className="add-reserve">
      <div className="r_container">
        <h1 className="title">Reserve a Class</h1>
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
};

export default AddReservation;
