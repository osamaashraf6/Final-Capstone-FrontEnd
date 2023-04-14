import { useParams, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ClassDetails = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://rails-wout.onrender.com/swim_classes/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleBack = () => {
    navigate('/swimClass');
  };

  return (
    <div className="container mt-5">
      {item && (
        <div className="d-flex justify-content-center item-details mb-5">
          <img
            src={
              item.image || 'https://i.postimg.cc/rmgZkkPK/havuz-izolasyonu.jpg'
            }
            alt=""
          />
          <div className="details">
            <h3>{item.name}</h3>
            <div className="bg-light">${item.fee}</div>
            <div>{item.location}</div>
            <div className="bg-light">
              {item.booked ? 'Booked' : 'Not Booked Yet'}
            </div>
            <Link to="addReserve">
              <button className="btn btn-success mt-5" type="button">
                Reserve
              </button>
            </Link>
          </div>
        </div>
      )}
      <button
        className="btn btn-success mt-5"
        type="button"
        onClick={handleBack}
      >
        Back
      </button>
    </div>
  );
};

export default ClassDetails;
