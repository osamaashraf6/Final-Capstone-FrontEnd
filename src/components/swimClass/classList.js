import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../loading';

const ClassList = () => {
  const [classes, setClasses] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const arr = [];
    fetch('https://rails-wout.onrender.com/swim_classes')
      .then((response) => response.json())
      .then((data) => {
        arr.push(data);
        setClasses(arr);
      });
  }, [currentIndex]);

  const goToPrevSlide = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? classes.length - 1 : prevIndex - 1));
  };

  const handleDelete = (id) => {
    fetch(`https://rails-wout.onrender.com/swim_classes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('SwimClass deleted successfully');
          setCurrentIndex(0);
        } else {
          console.error('Failed to delete SwimClass:', response.status);
        }
      })
      .catch((error) => {
        console.error('Error deleting SwimClass:', error);
      });
  };

  const goToNextSlide = () => {
    if (currentIndex === Math.floor((classes.length - 1) / 2)) return;
    setCurrentIndex((prevIndex) => (prevIndex === classes.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5">Welcome to Swimming Class</h2>
      {!classes && <Loading message="Loading..." />}
      {classes && classes.length === 0 && (
        <Loading message="You have no swimming classes yet!" />
      )}
      {classes && classes.length !== 0 && (
        <div className="carousel-container">
          <ul
            className="carousel-list"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {classes.map((swimClass) => (
              <div key={swimClass.id} className="class-item">
                <Link to={`/swimClass/${swimClass.id}`}>
                  <img
                    src={
                      swimClass.image
                      || 'https://i.postimg.cc/rmgZkkPK/havuz-izolasyonu.jpg'
                    }
                    alt={swimClass.name}
                  />
                </Link>
                <h4>{swimClass.name}</h4>
                <p>
                  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                  * * *
                </p>
                <p>{swimClass.description}</p>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(swimClass.id)}
                >
                  Delete class
                </button>
              </div>
            ))}
          </ul>
          <button
            type="button"
            className="carousel-prev-btn"
            onClick={goToPrevSlide}
          >
            &#8249;
          </button>
          <button
            type="button"
            className="carousel-next-btn"
            onClick={goToNextSlide}
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
};
export default ClassList;
