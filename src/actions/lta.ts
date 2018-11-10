import { createAction } from "typesafe-actions";

import { ltaBusStop } from "lta";
import { Dispatch } from "redux";

export const setBusStops = createAction(
  "SET_BUS_STOP",
  resolve => (busStops: ltaBusStop[]) => resolve({ busStops })
);

export const setDirections = createAction(
  "SET_DIRECTIONS",
  resolve => (directions: google.maps.DirectionsResult) =>
    resolve({ directions })
);
