import { counterReducer } from "./counter";
import { ltaReducer } from "./lta";
import { mapReducer } from "./map";

export const rootReducer = {
  counters: counterReducer,
  lta: ltaReducer,
  map: mapReducer
};
