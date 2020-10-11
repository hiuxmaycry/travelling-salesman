export const googleURI =
  'https://maps.google.com/maps/api/geocode/json?address=';

const apiKey = 'AIzaSyCxw77azFkwYOs_QYt-1HqKSwZcbrvEyrE';

export const getAddressPositionConfig = address => ({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: `https://maps.google.com/maps/api/geocode/json?address=${address}&key=${apiKey}`,
});
