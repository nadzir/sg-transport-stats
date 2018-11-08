// import GoogleMapReact, { Coords } from "google-map-react";
import React, { Component } from "react";
import {
  GoogleMap,
  Polyline,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
import DrawingManager from "react-google-maps/lib/components/drawing/DrawingManager";
import { compose, withProps } from "recompose";
declare var google: any;

export interface IMainMapProps {
  // center: Coords;
  zoom: number;
}

const apiKey = process.env.GOOGLE_MAP_API_KEY || "";

const MapWithPolyline = compose(
  withProps({
    containerElement: <div style={{ height: `1000px` }} />,
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={new google.maps.LatLng(-34.397, 150.644)}
  >
    <Polyline
      path={[{ lat: -34.397, lng: 150.644 }, { lat: -34.397, lng: 155.644 }]}
      options={{ strokeColor: "#ff0000" }}
    />
  </GoogleMap>
));

export class MainMap extends React.Component<IMainMapProps, {}> {
  public static defaultProps: Partial<IMainMapProps> = {
    // center: {
    //   lat: 1.29027,
    //   lng: 103.851959
    // },
    // zoom: 11
  };

  public render() {
    return <MapWithPolyline />;
  }
}
