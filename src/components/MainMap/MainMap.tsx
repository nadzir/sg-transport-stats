import { RangeSlider } from "@blueprintjs/core";
import { Example } from "@blueprintjs/docs-theme";
import {
  DEFAULT_LAT_SINGAPORE,
  DEFAULT_LNG_SINGAPORE,
  DEFAULT_MAP_ZOOM
} from "@src/constants/map";
import { ltaBusStop, ltaPassengerVolume } from "lta";
import { Range } from "rc-slider";
import React, { Fragment } from "react";
import { DirectionsRenderer, GoogleMap, Polyline } from "react-google-maps";

export interface IMainMapProps {
  busStops?: ltaBusStop[];
  passengerVols?: ltaPassengerVolume[];
  directions?: google.maps.DirectionsResult[];
  addDirection?: (direction: google.maps.DirectionsResult) => any;
  loadPassengerVolAsync?: () => any;
  time?: string;
}

export const containerElement = <div style={{ height: `1000px` }} />;
export const loadingElement = <div style={{ height: `100%` }} />;
export const mapElement = <div style={{ height: `100%` }} />;

export class MainMap extends React.Component<Partial<IMainMapProps>, {}> {
  public render() {
    return (
      <Fragment>
        <GoogleMap
          defaultZoom={DEFAULT_MAP_ZOOM}
          defaultCenter={
            new google.maps.LatLng(DEFAULT_LAT_SINGAPORE, DEFAULT_LNG_SINGAPORE)
          }
        >
          {this.polyline()}
          <Range />
        </GoogleMap>
        {/* <div style={wrapperStyle}>
          <p>Range with custom handle</p>
          <Slider
            min={0}
            max={20}
            // defaultValue={[3, 10]}
            // tipFormatter={value => `${value}%`}
          />
        </div> */}
        <Example>
          <RangeSlider
            min={0}
            max={100}
            stepSize={2}
            labelStepSize={20}
            // onChange={this.handleValueChange}
            value={[0, 72]}
            vertical={false}
          />
        </Example>
      </Fragment>
    );
  }

  private polyline() {
    return (this.props.passengerVols || [])
      .filter(passengerVol => passengerVol.timePerHour === this.props.time)
      .map(
        passengerVol =>
          passengerVol.polyline && (
            <Polyline
              path={google.maps.geometry.encoding.decodePath(
                passengerVol.polyline
              )}
              options={{ strokeColor: this.getColour(passengerVol.totalTrips) }}
            />
          )
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
