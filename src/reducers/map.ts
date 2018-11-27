import * as actions from "@src/actions";
import { RootAction } from "@src/types";
import { getType } from "typesafe-actions";

export interface IMapState {
  directions: google.maps.DirectionsResult[];
  time?: string;
}

const initValue = {
  directions: []
};

export const mapReducer = (
  state: IMapState = initValue,
  action: RootAction
): IMapState => {
  switch (action.type) {
    case getType(actions.addDirection):
      return {
        ...state,
        directions: (state.directions || []).concat(action.payload.direction)
      };
    case getType(actions.setTime):
      return {
        ...state,
        time: action.payload.time
      };
    default:
      return state;
  }
};
