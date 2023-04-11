/* eslint-disable */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomeList() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/swim_classes')
      .then((response) => response.json())
      .then((data) => setClasses(data))
      .catch((error) => console.error(error));
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    if (currentIndex == 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? classes.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    if (currentIndex == Math.floor((classes.length - 1) / 2)) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === classes.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5">Welcome to Swimming Class</h2>
      <div className="carousel-container">
        <ul
          className="carousel-list"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {classes.map((swimClass) => (
            <div key={swimClass.id} className="class-item">
              <Link to={`/swimClass/${swimClass.id}`}>
                <img src={swimClass.image} alt={swimClass.name} />
              </Link>
              <h4>{swimClass.name}</h4>
              <p>
                {
                  '* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *'
                }
              </p>
              <p>{swimClass.description}</p>
            </div>
          ))}
        </ul>
        <button className="carousel-prev-btn" onClick={goToPrevSlide}>
          &#8249;
        </button>
        <button className="carousel-next-btn" onClick={goToNextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
}
export default HomeList;
