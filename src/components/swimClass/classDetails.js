import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ClassDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/swim_classes/${id}`)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <h2>{details.name}</h2>
      <p>{details.description}</p>
      <img src={details.image} alt={details.name} />
    </div>
  );
}
export default ClassDetails;
