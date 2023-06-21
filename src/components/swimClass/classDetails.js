import { useParams, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ClassDetails = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://rails-i4jr.onrender.com/swim_classes/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = (id) => {
    fetch(`https://rails-i4jr.onrender.com/swim_classes/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        if (response.ok) console.log('Successfuly deleted');
        else console.error('Failed to delete SwimClass:', response.status);
      })
      .catch((error) => console.error('Error deleting SwimClass:', error));
    navigate('/swimClass');
  };

  return (
    <div className="container mt-5">
      {item && (
        <>
          <h3 className="text-center m-3">{item.name}</h3>
          <div className="d-flex justify-content-center align-items-center item-details mb-5">
            <img src={item.image} alt="" className="img-detail" />
            <div className="details p-5">
              <div className="bg-light my-2">{`Fee: $${item.fee}`}</div>
              <div className="mb-2">{`Location: ${item.location}`}</div>
              <p>{`Description: ${item.description}`}</p>
              <p>
                Nestled within lush tropical landscapes, this refined seaside
                hotel is situated only 2 kilometers shy from Nyali Beach and 5
                kilometers away from the vibrant city center, offering guests
                the perfect balance between serene coastal beauty and convenient
                urban exploration.
              </p>
              <Link to="addReserve">
                <button className="btn btn-success m-4" type="button">
                  Reserve
                </button>
              </Link>
              <button
                type="button"
                className="btn btn-danger m-4"
                onClick={() => handleDelete(item.id)}
              >
                Delete class
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ClassDetails;
