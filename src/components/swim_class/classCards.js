/* eslint camelcase: "off" */
/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../assets/styles/ClassCard.css';

const ClassCard = (props) => {
  const { id, name, image, location, fee, description, booked } = props;

  const swim_classDetailsLink = `/swim_classes/${id}`;

  return (
    <Link to={swim_classDetailsLink} id={id} className="card-link">
      <div className="card-content">
        <img className="class-img" src={image} alt={name} />
        <div className="class_info">
          <h2 className="description">{description}</h2>
          <div className="class-features">
            <h3>{name}</h3>
          </div>
          <div className="classFee">
            <h4>{fee}$ monthly</h4>
          </div>
          <div className="location">
            <h4>{location}</h4>
          </div>
          <div className="class-options">
            <p>{!booked ? 'Available' : 'Not available'}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ClassCard;

ClassCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fee: PropTypes.string.isRequired,
  booked: PropTypes.bool,
};

ClassCard.defaultProps = {
  booked: false,
};
