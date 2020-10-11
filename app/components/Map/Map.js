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
  };

  static defaultProps = { onClick: () => {} };

  constructor(props) {
    super(props);
    const { lat, lng, onClick } = this.props;
    const width = '850px';
    const height = '90%';

    this.initializeMap({
      width,
      height,
      lat,
      lng,
      onClick,
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
    return (
      <div>
        <h5 key="posicionGeografica">
          <b>Posición Geográfica</b>
          <button
            type="button"
            bsStyle="success"
            bsSize="xsmall"
            className="pull-right"
            onClick={this.state.onClick}
          >
            Update Positión
          </button>
        </h5>
        <div style={{ height: '40vh', width: '100%' }}>
          <Map
            draggable={this.props.draggable}
            style={{ width: this.state.width, height: this.state.height }}
            google={this.props.google}
            zoom={14}
            initialCenter={{
              lat: this.state.lat || -34.59378080536352,
              lng: this.state.lng || -58.44440356103553,
            }}
            center={{
              lat: this.state.lat || -34.59378080536352,
              lng: this.state.lng || -58.44440356103553,
            }}
            disableDefaultUI
            onClick={this.mapClicked}
          >
            <Marker
              onClick={this.onMarkerClick}
              position={{
                lat: this.state.lat,
                lng: this.state.lng,
              }}
              disableDefaultUI
              id="CurrentLocation"
              name="CurrentLocation"
            />
          </Map>
          <span
            ref={latitudSpan => {
              this.latitudSpan = latitudSpan;
            }}
            id="latitudSpan"
            name="latitudSpan"
          >
            {this.state.lat}
          </span>
          <span
            ref={longitudSpan => {
              this.longitudSpan = longitudSpan;
            }}
            id="longitudSpan"
            name="longitudSpan"
          >
            {this.state.lng}
          </span>
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
