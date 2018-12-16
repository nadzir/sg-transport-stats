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
    <Card elevation={Elevation.ZERO} className="bp3-dark">
      <h4>Popular bus routes in Singapore</h4>
      <p>Drag the slider to see the most popular routes throughout the day</p>
      <Card elevation={Elevation.ZERO} className="bp3-dark">
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
      <MainMapContainer />
    </Card>
  </React.Fragment>
);
