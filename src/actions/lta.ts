import { createAction } from "typesafe-actions";

import { ltaBusStop } from "lta";
import { Dispatch } from "redux";

export const setBusStops = createAction(
  "SET_BUS_STOP",
  resolve => (busStops: ltaBusStop[]) => resolve({ busStops })
);

export const addDirection = createAction(
  "ADD_DIRECTION",
  resolve => (direction: google.maps.DirectionsResult) => resolve({ direction })
);
