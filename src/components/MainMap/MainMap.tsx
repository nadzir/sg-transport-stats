import {
  DEFAULT_LAT_SINGAPORE,
  DEFAULT_LNG_SINGAPORE,
  DEFAULT_MAP_ZOOM
} from "@src/constants/map";
import { ltaBusStop, ltaPassengerVolume } from "lta";
import React from "react";
import { GoogleMap, Polyline } from "react-google-maps";
import { darkStyle } from "./MainMap.constants";

export interface IMainMapProps {
  busStops?: ltaBusStop[];
  passengerVols?: ltaPassengerVolume[];
  directions?: google.maps.DirectionsResult[];
  addDirection?: (direction: google.maps.DirectionsResult) => any;
  loadPassengerVolAsync?: () => any;
  setTime?: () => any;
  time?: number;
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
        defaultOptions={{ styles: darkStyle }}
      >
        {this.polyline()}
      </GoogleMap>
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
}
