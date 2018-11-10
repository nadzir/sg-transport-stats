import { createAction } from "typesafe-actions";

import { ltaBusStop } from "lta";

export const setBusStops = createAction(
  "SET_BUS_STOP",
  resolve => (busStops: ltaBusStop[]) => resolve({ busStops })
);
