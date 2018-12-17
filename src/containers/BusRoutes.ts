import { setTime } from "@src/actions";
import { BusRoutes, IBusRoutesProps } from "@src/components/BusRoutes";
import { RootDispatch, RootState } from "@src/types";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState): IBusRoutesProps => ({
  time: state.map.time
});

const mapDispatchToProps = (dispatch: RootDispatch): IBusRoutesProps => ({
  setTime: (time: number) => dispatch(setTime(time))
});

// Ignore types for first two generic types of connect for convenience
export const BusRoutesContainer =
  // connect to store
  connect<{}, {}, IBusRoutesProps, RootState>(
    mapStateToProps,
    mapDispatchToProps
  )(BusRoutes);
