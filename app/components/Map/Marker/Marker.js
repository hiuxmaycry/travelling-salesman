import React from 'react';
import PropTypes from 'prop-types';
import styles from './Marker.css';

const Marker = ({ id, index, position: { lat, lng }, onDelete }) => (
  <div key={id} className={styles.container}>
    <h5 className={styles.title}>Marker: {index}</h5>
    <ul className={styles.list}>
      <li>Latitude: {lat}</li>
      <li>Longitude: {lng}</li>
    </ul>
    <button type="button" onClick={onDelete}>
      delete
    </button>
  </div>
);

Marker.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  position: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Marker;
