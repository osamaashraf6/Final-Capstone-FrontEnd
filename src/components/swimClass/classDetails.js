import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteClass, getClasses } from '../../redux/swimClass/swimClass';

const ClassDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { swimClasses } = useSelector((store) => store.swimClasses);

  const swimClass = swimClasses.find((item) => item.id.toString() === id);

  useEffect(() => {
    if (!swimClasses || swimClasses.length === 0) {
      dispatch(getClasses());
    }
  }, [dispatch, swimClasses]);

  const handleDelete = (id) => {
    dispatch(deleteClass(id));
    navigate('/swimClass');
  };

  return (
    <div className="container overflow-auto mt-5">
      {!swimClass ? (
        <p className="text-center text-muted">Loading class details...</p>
      ) : (
        <>
          <div className="row item-details align-items-start">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                src={swimClass.image}
                alt={swimClass.name}
                className="img-detail"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                }}
              />
            </div>
            <div
              className="col-md-8 p-3 border rounded"
              style={{ backgroundColor: 'var(--green-accent)' }}
            >
              <h3 className="text-center m-3">{swimClass.name}</h3>

              <div className="d-flex flex-wrap gap-3">
                <div className="details p-4 bg-secondary border rounded  text-white flex-fill">
                  <div className="bg-light text-dark border rounded my-2 p-2">{`Fee: $${swimClass.fee}`}</div>
                  <div className="mb-2">{`Location: ${swimClass.location}`}</div>
                  <p>{`Description: ${swimClass.description}`}</p>
                  <p>
                    Nestled within lush tropical landscapes, this refined
                    seaside hotel is situated only 2 kilometers shy from Nyali
                    Beach and 5 kilometers away from the vibrant city center...
                  </p>
                </div>
                <div className="p-4 bg-secondary border rounded text-white flex-fill">
                  <h5>Instructor Info</h5>
                  <p>
                    Coach:
                    {' '}
                    <strong>Jane Doe</strong>
                  </p>
                  <p>Experience: 10+ yrs</p>
                  <p>Rating: ⭐⭐⭐⭐☆</p>
                </div>
              </div>
              <div className="text-center mt-4">
                <Link to="addReserve">
                  <button
                    className="btn btn-success m-2 border-light"
                    type="button"
                  >
                    Reserve
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-sucess m-2 border-danger text-danger hover-danger"
                  onClick={() => handleDelete(swimClass.id)}
                >
                  Delete class
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ClassDetails;
