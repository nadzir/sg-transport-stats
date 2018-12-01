// import { loadPassengerVolAsync, setTime } from "@src/actions";
// import { IOneMapProps, OneMap } from "@src/components/OneMap";
// import { RootDispatch, RootState } from "@src/types";
// import { noop } from "lodash";
// import { connect } from "react-redux";
// import { compose, lifecycle } from "recompose";

// const mapStateToProps = (state: RootState): IOneMapProps => ({
//   passengerVols: state.lta.passengerVolumes,
//   time: state.map.time || "0"
// });

// const mapDispatchToProps = (dispatch: RootDispatch): IOneMapProps => ({
//   loadPassengerVolAsync: () => dispatch(loadPassengerVolAsync()),
//   setTime: (time: string) => dispatch(setTime(time))
// });

// const componentDidMount = lifecycle<IOneMapProps, {}>({
//   componentDidMount() {
//     this.props.loadPassengerVolAsync
//       ? this.props.loadPassengerVolAsync()
//       : noop();

//     // changeTime(this.props.setTime, "5");
//   }
// });

// const changeTime = (timefn?: (time: string) => any, time: string) => {
//   setTimeout(() => {
//     timefn(time);
//     changeTime(timefn, parseInt(time, 10) + (1 % 24) + "");
//   }, 1000);
// };

// // Ignore types for first two generic types of connect for convenience
// export const OneMapContainer = compose(
//   // connect to store
//   connect<{}, {}, IOneMapProps, RootState>(
//     mapStateToProps,
//     mapDispatchToProps
//   ),
//   // DidMount lifecycle
//   componentDidMount
// )(OneMap);
