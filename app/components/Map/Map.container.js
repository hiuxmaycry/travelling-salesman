import { GoogleApiWrapper as GoogleAPIWrapper } from 'google-maps-react';
import { connect } from 'react-redux';
import { apiKey } from '../../apis/google';
import { getAddreessFromMarker } from './Map.gateway';
import Map from './Map';

const mapStateToProps = () => ({ onRenderMarker: getAddreessFromMarker });

export default GoogleAPIWrapper({ apiKey })(connect(mapStateToProps)(Map));
