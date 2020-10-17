import { Map as MapContainer, Marker } from 'google-maps-react';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Map.css';

export default class Map extends React.Component {
  static propTypes = {
    initialPosition: PropTypes.object,
    google: PropTypes.object.isRequired,
    draggable: PropTypes.bool,
    width: PropTypes.string,
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
    width: '800px',
    height: '600px',
    zoom: 14,
    draggable: true,
  };

  onMarkerClick = (event, other) => {
    console.log(event);
    console.log(other);
  };

  mapClicked = (mapProps, map, clickEvent) => {
    console.log(mapProps, map, clickEvent);

    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();

    this.addMarker(lat, lng);
  };

  addMarker = (lat, lng) => {
    this.setState(prevState => ({
      markers: prevState.markers.concat({ position: { lat, lng } }),
    }));
  };

  getLatLng = () => ({
    lat: this.state.lat,
    lng: this.state.lng,
  });

  render() {
    const {
      initialPosition,
      draggable,
      google,
      zoom,
      width,
      height,
    } = this.props;
    const { markers } = this.state;

    console.log('>>>', styles);

    return (
      <div>
        <div className={styles.map}>
          <MapContainer
            draggable={draggable}
            style={{ width, height }}
            google={google}
            zoom={zoom}
            initialCenter={initialPosition}
            center={initialPosition}
            disableDefaultUI
            onClick={this.mapClicked}
          >
            {markers.map(marker => (
              <Marker
                onClick={this.onMarkerClick}
                position={marker.position}
                disableDefaultUI
                id="CurrentLocation"
                name="CurrentLocation"
              />
            ))}
          </MapContainer>
        </div>
      </div>
    );
  }
}
