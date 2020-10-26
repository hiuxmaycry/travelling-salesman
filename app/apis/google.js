export const googleURI = 'https://maps.google.com/maps/api/';

export const geocodePath = 'geocode';

export const directionsPath = 'directions';

export const apiKey = 'AIzaSyCxw77azFkwYOs_QYt-1HqKSwZcbrvEyrE';

export const googleConfig = {
  mode: 'no-cors',
  headers: {
    Referrer: 'http://localhost:3000/',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
    'Access-Control-Allow-Origin': 'http://localhost:3000/',
    'Access-Control-Allow-Headers':
      'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  },
};
