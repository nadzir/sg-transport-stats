import * as actions from "@src/actions";
import { busStopData } from "@src/data/busstop";
import { RootAction } from "@src/types";
import { ltaBusStop } from "lta";
import { getType } from "typesafe-actions";

export interface ILtaState {
  busStops: ltaBusStop[];
}

const initValue = {
  busStops: busStopData.value
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
    default:
      return state;
  }
};
