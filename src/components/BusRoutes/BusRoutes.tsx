import { Card, Elevation, Slider } from "@blueprintjs/core";
import { MainMapContainer } from "@src/containers/MainMap";
import { noop } from "lodash";
import * as React from "react";

export interface IBusRoutesProps {
  time?: number;
  setTime?: (time: number) => any;
}

const renderLabel = (val: number) => {
  if (val === 12) {
    return `${12} nn`;
  }
  if (val > 12) {
    return `${val - 12} pm`;
  }
  return `${val} am`;
};

// export class BusRoutes extends React.Component<IBusRoutesProps, {}> {
export const BusRoutes = ({ setTime, time }: IBusRoutesProps) => (
  <React.Fragment>
    <Card interactive={true} elevation={Elevation.TWO} className="bp3-dark">
      {/* <h5><a href="#">Card heading</a></h5> */}
      <MainMapContainer />
    </Card>

    <Card interactive={true} elevation={Elevation.TWO} className="bp3-dark">
      <h3>
        <a href="#">Time</a>
      </h3>
      <Slider
        min={7}
        max={24}
        stepSize={1}
        labelStepSize={1}
        onChange={value => (setTime ? setTime(value) : noop)}
        labelRenderer={renderLabel}
        showTrackFill={false}
        value={time}
      />
    </Card>
  </React.Fragment>
);
