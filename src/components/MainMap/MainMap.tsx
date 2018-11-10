import {
  DEFAULT_LAT_SINGAPORE,
  DEFAULT_LNG_SINGAPORE,
  DEFAULT_MAP_ZOOM
} from "@src/constants/map";
import React from "react";
import { DirectionsRenderer, GoogleMap, Polyline } from "react-google-maps";

export interface IMainMapProps {
  directions?: google.maps.DirectionsResult[];
  addDirection: (direction: google.maps.DirectionsResult) => any;
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
        {/* <Polyline
          path={[
            { lat: -34.397, lng: 150.644 },
            { lat: -34.397, lng: 155.644 }
          ]}
          options={{ strokeColor: "#ff0000" }}
        /> */}
        {this.directions()}
      </GoogleMap>
    );
  }

  private directions() {
    return (this.props.directions || []).map(direction => (
      <DirectionsRenderer directions={direction} />
    ));
  }
}
