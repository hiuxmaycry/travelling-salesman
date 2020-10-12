import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Map,
  Marker,
  GoogleApiWrapper as GoogleAPIWrapper,
} from 'google-maps-react';

export class MapContainer extends React.Component {
  static propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number,
    google: PropTypes.number,
    onClick: PropTypes.func,
    draggable: PropTypes.bool,
    width: PropTypes.string,
    zoom: PropTypes.number,
    height: PropTypes.string,
  };

  static defaultProps = {
    onClick: () => {},
    width: '850px',
    height: '90%',
    zoom: 14,
    draggable: false,
  };

  constructor(props) {
    super(props);
    const { lat, lng } = this.props;

    this.initializeMap({
      lat,
      lng,
    });
  }

  initializeMap = state => {
    this.setState(state);
  };

  onMarkerClick(event, other) {
    console.log(event);
    console.log(other);
  }

  mapClicked = (mapProps, map, clickEvent) => {
    console.log(`${clickEvent.latLng.lat()}     ${clickEvent.latLng.lng()}`);
  };

  getLatLng = () => ({
    lat: this.state.lat,
    lng: this.state.lng,
  });

  render() {
    const { width, height, draggable, google, onClick, zoom } = this.props;
    const { lat, lng } = this.state;

    return (
      <div>
        <h5 key="posicionGeografica">
          <b>Posición Geográfica</b>
          <button
            type="button"
            bsStyle="success"
            bsSize="xsmall"
            className="pull-right"
            onClick={onClick}
          >
            Update Positión
          </button>
        </h5>
        <div style={{ height: '40vh', width: '100%' }}>
          <Map
            draggable={draggable}
            style={{ width, height }}
            google={google}
            zoom={zoom}
            initialCenter={{
              lat: lat || -34.59378080536352,
              lng: lng || -58.44440356103553,
            }}
            center={{
              lat: lat || -34.59378080536352,
              lng: lng || -58.44440356103553,
            }}
            disableDefaultUI
            onClick={this.mapClicked}
          >
            <Marker
              onClick={this.onMarkerClick}
              position={{
                lat,
                lng,
              }}
              disableDefaultUI
              id="CurrentLocation"
              name="CurrentLocation"
            />
          </Map>
          <span>{lat}</span>
          <span>{lng}</span>
        </div>
      </div>
    );
  }
}

const WrappedContainer = GoogleAPIWrapper({
  apiKey: 'AIzaSyC_rDpCs7Wgs5-qpnfx70_-LgvO89-zIDA',
})(MapContainer);

export default GoogleAPIWrapper({
  apiKey: 'AIzaSyC_rDpCs7Wgs5-qpnfx70_-LgvO89-zIDA',
})(
  connect(
    null,
    null,
    null,
    { withRef: true },
  )(WrappedContainer),
);
