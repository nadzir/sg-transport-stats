import { counterReducer } from "./counter";
import { ltaReducer } from "./lta";

export const rootReducer = { counters: counterReducer, lta: ltaReducer };
