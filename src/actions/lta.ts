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
declare var __BACKEND_HOST__: string;
export const loadPassengerVolAsync = (): any => (
  dispatch: Dispatch<ReturnType<typeof setPassengerVols>>
) => {
  // const backendHost = process.env.BACKEND_HOST;
  console.log(__BACKEND_HOST__);
  axios.get(`${__BACKEND_HOST__}/api/passengerVol`).then(({ data }) => {
    dispatch(setPassengerVols(data));
  });
};
