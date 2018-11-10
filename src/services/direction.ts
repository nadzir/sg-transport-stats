export const getDirection = (
  setDirections: (directions: google.maps.DirectionsResult) => any,
//   destination: google.maps.LatLng,
//   origin: google.maps.LatLng
) => {
  const DirectionsService = new google.maps.DirectionsService();

  DirectionsService.route(
    {
      destination: new google.maps.LatLng(41.85258, -87.65141),
      origin: new google.maps.LatLng(41.85073, -87.65126),
      travelMode: google.maps.TravelMode.DRIVING
    },
    (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        setDirections(result);
      }
    }
  );
};
