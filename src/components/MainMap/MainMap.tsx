import { RangeSlider } from "@blueprintjs/core";
import { Example } from "@blueprintjs/docs-theme";
import {
  DEFAULT_LAT_SINGAPORE,
  DEFAULT_LNG_SINGAPORE,
  DEFAULT_MAP_ZOOM
} from "@src/constants/map";
import { ltaBusStop, ltaPassengerVolume } from "lta";
import React, { Fragment } from "react";
import { DirectionsRenderer, GoogleMap, Polyline } from "react-google-maps";

export interface IMainMapProps {
  busStops?: ltaBusStop[];
  passengerVols?: ltaPassengerVolume[];
  directions?: google.maps.DirectionsResult[];
  addDirection?: (direction: google.maps.DirectionsResult) => any;
  loadPassengerVolAsync?: () => any;
  setTime?: () => any;
  time?: string;
}

export const containerElement = <div style={{ height: `1000px` }} />;
export const loadingElement = <div style={{ height: `100%` }} />;
export const mapElement = <div style={{ height: `100%` }} />;

const exampleMapStyles = [
  {
    featureType: "all",
    elementType: "labels.text.fill",
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
    featureType: "all",
    elementType: "labels.text.stroke",
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
    featureType: "all",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
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
    featureType: "administrative",
    elementType: "geometry.stroke",
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
    featureType: "landscape",
    elementType: "geometry",
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
    featureType: "poi",
    elementType: "geometry",
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
    featureType: "road.highway",
    elementType: "geometry.fill",
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
    featureType: "road.highway",
    elementType: "geometry.stroke",
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
    featureType: "road.arterial",
    elementType: "geometry",
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
    featureType: "road.local",
    elementType: "geometry",
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
    featureType: "transit",
    elementType: "geometry",
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
    featureType: "water",
    elementType: "geometry",
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

export class MainMap extends React.Component<Partial<IMainMapProps>, {}> {
  public render() {
    return (
      <Fragment>
        <GoogleMap
          defaultZoom={DEFAULT_MAP_ZOOM}
          defaultCenter={
            new google.maps.LatLng(DEFAULT_LAT_SINGAPORE, DEFAULT_LNG_SINGAPORE)
          }
          defaultOptions={{ styles: exampleMapStyles }}
        >
          {this.polyline()}
        </GoogleMap>
      </Fragment>
    );
  }

  private polyline() {
    return (this.props.passengerVols || [])
      .filter(passengerVol => passengerVol.timePerHour === this.props.time)
      .map(
        passengerVol =>
          passengerVol.polyline &&
          passengerVol.polyline.split("[,]").map(poly => {
            return (
              <Polyline
                key="Asd"
                path={google.maps.geometry.encoding.decodePath(poly)}
                options={{
                  strokeColor: this.getColour(passengerVol.totalTrips)
                }}
              />
            );
          })
      );
  }

  private getColour(trips: number) {
    if (trips <= 50) {
      return "#032f60";
    }
    if (trips <= 60) {
      return "#176dae";
    }
    if (trips <= 70) {
      return "#cccccc";
    }
    if (trips <= 80) {
      return "#dd6e6e";
    }
    return "#cc0000";
  }

  private directions() {
    return (this.props.directions || []).map(direction => (
      <DirectionsRenderer directions={direction} />
    ));
  }
}
