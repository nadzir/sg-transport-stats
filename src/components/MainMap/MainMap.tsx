import React from "react";
import { DirectionsRenderer, GoogleMap, Polyline } from "react-google-maps";

export interface IMainMapProps {
  directions?: google.maps.DirectionsResult;
}

export const containerElement = <div style={{ height: `1000px` }} />;
export const loadingElement = <div style={{ height: `100%` }} />;
export const mapElement = <div style={{ height: `100%` }} />;

export class MainMap extends React.Component<Partial<IMainMapProps>, {}> {
  public render() {
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={new google.maps.LatLng(-34.397, 150.644)}
      >
        <Polyline
          path={[
            { lat: -34.397, lng: 150.644 },
            { lat: -34.397, lng: 155.644 }
          ]}
          options={{ strokeColor: "#ff0000" }}
        />
        {this.props.directions && (
          <DirectionsRenderer directions={this.props.directions} />
        )}
      </GoogleMap>
    );
  }
}
