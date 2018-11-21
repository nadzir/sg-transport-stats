// import { busStopData } from "@data";
import * as actions from "@src/actions";
import { RootAction } from "@src/types";
import { ltaBusStop, ltaPassengerVolume } from "lta";
import { getType } from "typesafe-actions";

export interface ILtaState {
  busStops?: ltaBusStop[];
  passengerVolumes?: ltaPassengerVolume[];
}

const initValue = {
  // busStops: busStopData.value
};

export const ltaReducer = (
  state: ILtaState = initValue,
  action: RootAction
): ILtaState => {
  switch (action.type) {
    case getType(actions.setBusStops):
      return {
        ...state,
        busStops: action.payload.busStops
      };
    case getType(actions.setPassengerVols):
      return {
        ...state,
        passengerVolumes: action.payload.passengerVols
      };

    default:
      return state;
  }
};
