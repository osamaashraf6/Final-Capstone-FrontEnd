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

  return (
    <>
      <div>
        <h4 className="text-center mb-4">Welcome to Swimming Class</h4>
        {classes.map((swimClass) => (
          <div key={swimClass.id}>
            <img src={swimClass.image} alt={swimClass.name} />
            <h2>{swimClass.name}</h2>
            <p>{swimClass.description}</p>
            <Link to={`/swimClass/${swimClass.id}`}>View Product</Link>
          </div>
        ))}
      </div>
    </>
  );
}
export default HomeList;
