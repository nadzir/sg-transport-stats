export const directionService = (
  destination: google.maps.LatLng,
  origin: google.maps.LatLng,
  cb: (directions: google.maps.DirectionsResult) => any
) => {
  const DirectionsService = new google.maps.DirectionsService();
  // console.log(destination,origin)

  DirectionsService.route(
    {
      destination,
      origin,
      transitOptions: {
        modes: [google.maps.TransitMode.BUS]
      },
      travelMode: google.maps.TravelMode.TRANSIT
    },
    (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        cb(result);
      }
    }
  );
};
