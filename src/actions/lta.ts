import axios from "axios";
import { ltaBusStop, ltaPassengerVolume } from "lta";
import { Dispatch } from "redux";
import { createAction } from "typesafe-actions";

export const setBusStops = createAction(
  "SET_BUS_STOP",
  resolve => (busStops: ltaBusStop[]) => resolve({ busStops })
);

export const setPassengerVols = createAction(
  "SET_PASSENGER_VOL",
  resolve => (passengerVols: ltaPassengerVolume[]) => resolve({ passengerVols })
);

export const loadPassengerVolAsync = (): any => (
  dispatch: Dispatch<ReturnType<typeof setPassengerVols>>
) => {
  axios.get("http://localhost:3000/api/passengerVol").then(({ data }) => {
    dispatch(setPassengerVols(data));
  });
};
