import { createAction } from "typesafe-actions";

export const addDirection = createAction(
  "ADD_DIRECTION",
  resolve => (direction: google.maps.DirectionsResult) => resolve({ direction })
);
