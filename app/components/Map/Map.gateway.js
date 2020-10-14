import axios from 'axios';
import { getAddressPositionConfig } from '../../apis/google';

export const getAddressPosition = address => {
  const config = getAddressPositionConfig(address);

  return axios(config).then(data => {
    console.log(data.data);

    return {
      lat: data.data.results[0].geometry.location.lat,
      lng: data.data.results[0].geometry.location.lng,
    };
  });
};
