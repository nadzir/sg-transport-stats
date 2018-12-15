import axios from "axios";
import { ltaBusStop, ltaPassengerVolume } from "lta";
import { Dispatch } from "redux";
import { createAction } from "typesafe-actions";
import { string } from "prop-types";

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
  const backendHost = process.env.BACKEND_HOST;
  axios.get(`${backendHost}/api/passengerVol`).then(({ data }) => {
    dispatch(setPassengerVols(data));
  });
};
