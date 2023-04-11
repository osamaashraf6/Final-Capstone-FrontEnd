import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomeList() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/swim_classes')
      .then((response) => response.json())
      .then((data) => setClasses(data))
      .catch((error) => error);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? classes.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    if (currentIndex === Math.floor((classes.length - 1) / 2)) return;
    setCurrentIndex((prevIndex) => (prevIndex === classes.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5">Welcome to Swimming Class</h2>
      <div className="carousel-container">
        <ul
          className="carousel-list"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {classes.map((item) => (
            <div key={item.id} className="class-item">
              <Link to={`/swimClass/${item.id}`}>
                <img
                  src={
                    item.image
                    || 'https://i.postimg.cc/rmgZkkPK/havuz-izolasyonu.jpg"'
                  }
                  alt=""
                />
              </Link>
              <h4>{item.name}</h4>
              <p>
                * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                * *
              </p>
              <p>{item.description}</p>
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
    </div>
  );
}
export default HomeList;
