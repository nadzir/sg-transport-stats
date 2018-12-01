export const darkStyle: google.maps.MapTypeStyle[] = [
  {
    elementType: "labels.text.fill",
    featureType: "all",
    stylers: [
      {
        saturation: 36
      },
      {
        color: "#000000"
      },
      {
        lightness: 40
      }
    ]
  },
  {
    elementType: "labels.text.stroke",
    featureType: "all",
    stylers: [
      {
        visibility: "on"
      },
      {
        color: "#000000"
      },
      {
        lightness: 16
      }
    ]
  },
  {
    elementType: "labels.icon",
    featureType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    elementType: "geometry.fill",
    featureType: "administrative",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 20
      }
    ]
  },
  {
    elementType: "geometry.stroke",
    featureType: "administrative",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 17
      },
      {
        weight: 1.2
      }
    ]
  },
  {
    elementType: "geometry",
    featureType: "landscape",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 20
      }
    ]
  },
  {
    elementType: "geometry",
    featureType: "poi",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 21
      }
    ]
  },
  {
    elementType: "geometry.fill",
    featureType: "road.highway",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 17
      }
    ]
  },
  {
    elementType: "geometry.stroke",
    featureType: "road.highway",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 29
      },
      {
        weight: 0.2
      }
    ]
  },
  {
    elementType: "geometry",
    featureType: "road.arterial",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 18
      }
    ]
  },
  {
    elementType: "geometry",
    featureType: "road.local",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 16
      }
    ]
  },
  {
    elementType: "geometry",
    featureType: "transit",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 19
      }
    ]
  },
  {
    elementType: "geometry",
    featureType: "water",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 17
      }
    ]
  }
];
