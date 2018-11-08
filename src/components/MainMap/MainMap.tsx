import GoogleMapReact, { Coords } from "google-map-react";
import React, { Component } from "react";

export interface IMainMapProps {
  center: Coords;
  zoom: number;
}

const apiKey = process.env.GOOGLE_MAP_API_KEY || "";

export class MainMap extends React.Component<IMainMapProps, {}> {
  public static defaultProps: Partial<IMainMapProps> = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  public render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}