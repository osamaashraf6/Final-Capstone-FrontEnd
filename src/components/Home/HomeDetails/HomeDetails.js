import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function HomeDetails() {
  const { id } = useParams();
  const [classDetails, setClassDetails] = useState({});

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/swim_classes/${id}`)
      .then((response) => response.json())
      .then((data) => setClassDetails(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <h2>{classDetails.name}</h2>
      <p>{classDetails.description}</p>
      <img src={classDetails.image} alt={classDetails.name} />
    </div>
  );
}
export default HomeDetails;
