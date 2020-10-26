import { Map as MapContainer, Marker as MapMarker } from 'google-maps-react';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Map.css';
import Marker from './Marker';

export default class Map extends React.Component {
  static propTypes = {
    initialPosition: PropTypes.object,
    google: PropTypes.object.isRequired,
    draggable: PropTypes.bool,
    width: PropTypes.string,
    onRenderMarker: PropTypes.func,
    height: PropTypes.string,
    zoom: PropTypes.number,
  };

  state = {
    markers: [],
  };

  static defaultProps = {
    initialPosition: {
      lat: -34.60373510272623,
      lng: -58.38157007365845,
    },
    width: '50%',
    height: '600px',
    zoom: 14,
    draggable: true,
  };

  // TODO delete later
  onMarkerClick = (event, other) => ({
    event,
    other,
  });

  mapClicked = (mapProps, map, clickEvent) => {
    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();

    this.addMarker(lat, lng);
  };

  addMarker = (lat, lng) => {
    this.setState(prevState => ({
      markers: prevState.markers.concat({
        position: { lat, lng },
        id: `${lat}/${lng}`,
      }),
    }));
  };

  deleteMarker = markerId => {
    const { markers } = this.state;
    const index = markers.findIndex(({ id }) => id === markerId);

    if (index >= 0) {
      this.setState({
        markers: [
          ...markers.slice(0, index),
          ...markers.slice(index + 1, markers.length),
        ],
      });
    }
  };

  render() {
    const {
      initialPosition,
      draggable,
      google,
      zoom,
      width,
      height,
      onRenderMarker,
    } = this.props;
    const { markers } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.map}>
          <MapContainer
            draggable={draggable}
            containerStyle={{ width, height }}
            google={google}
            zoom={zoom}
            initialCenter={initialPosition}
            center={initialPosition}
            disableDefaultUI
            onClick={this.mapClicked}
          >
            {markers.map(marker => (
              <MapMarker
                onClick={this.onMarkerClick}
                position={marker.position}
                disableDefaultUI
                key={marker.id}
                id={marker.id}
                name="CurrentLocation"
              />
            ))}
          </MapContainer>
        </div>
        <div className={styles.markers}>
          <h2>Markers</h2>
          <div className={styles.markersList}>
            {markers.map((marker, index) => (
              <Marker
                {...marker}
                index={index}
                onDelete={() => this.deleteMarker(marker.id)}
                onRender={() => onRenderMarker(marker.position)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
