import { googleConfig, apiKey } from '../../apis/google';

// export const getAddressPosition = address => {
//   const config = googleURI;

//   return axios(config).then(data => ({
//     lat: data.data.results[0].geometry.location.lat,
//     lng: data.data.results[0].geometry.location.lng,
//   }));
// };

export const getAddreessFromMarker = ({ lat, lng }) => {
  const adderssURL = `https://maps.googleapis.com/maps/api/directions/json?origin=${lat},${lng}&key=${apiKey}`;

  return fetch(adderssURL, googleConfig).then(response => {
    console.log(response);
  });
};
