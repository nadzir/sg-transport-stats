import {
  DEFAULT_LAT_SINGAPORE,
  DEFAULT_LNG_SINGAPORE,
  DEFAULT_MAP_ZOOM
} from "@src/constants/map";
import { ltaBusStop } from "lta";
import React from "react";
import { DirectionsRenderer, GoogleMap, Polyline } from "react-google-maps";

export interface IMainMapProps {
  busStops?: ltaBusStop[];
  directions?: google.maps.DirectionsResult[];
  addDirection?: (direction: google.maps.DirectionsResult) => any;
}

export const containerElement = <div style={{ height: `1000px` }} />;
export const loadingElement = <div style={{ height: `100%` }} />;
export const mapElement = <div style={{ height: `100%` }} />;

export class MainMap extends React.Component<Partial<IMainMapProps>, {}> {
  public render() {
    return (
      <GoogleMap
        defaultZoom={DEFAULT_MAP_ZOOM}
        defaultCenter={
          new google.maps.LatLng(DEFAULT_LAT_SINGAPORE, DEFAULT_LNG_SINGAPORE)
        }
      >
        {this.polyline()}
        {/* {this.directions()} */}
      </GoogleMap>
    );
  }

  private polyline() {
    return (this.props.directions || []).map(direction => (
      <Polyline
        path={direction.routes[0].overview_path}
        options={{ strokeColor: "#ff0000" }}
      />
    ));
  }

  private directions() {
    return (this.props.directions || []).map(direction => (
      <DirectionsRenderer directions={direction} />
    ));
  }
}
