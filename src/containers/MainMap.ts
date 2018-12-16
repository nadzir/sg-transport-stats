import { loadPassengerVolAsync, setTime } from "@src/actions";
import {
  containerElement,
  IMainMapProps,
  loadingElement,
  MainMap,
  mapElement
} from "@src/components/MainMap";
import { directionService } from "@src/services/direction";
import { RootDispatch, RootState } from "@src/types";
import { noop } from "lodash";
import { withGoogleMap, withScriptjs } from "react-google-maps";
import { connect } from "react-redux";
import { compose, lifecycle, withProps } from "recompose";

const mapStateToProps = (state: RootState): IMainMapProps => ({
  busStops: state.lta.busStops,
  directions: state.map.directions,
  passengerVols: state.lta.passengerVolumes
});

const mapDispatchToProps = (dispatch: RootDispatch): IMainMapProps => ({
  loadPassengerVolAsync: () => dispatch(loadPassengerVolAsync())
});

const apiKey = process.env.GOOGLE_MAP_API_KEY;
const googleMapReactProps = withProps({
  containerElement,
  googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
  loadingElement,
  mapElement
});

const componentDidMount = lifecycle<IMainMapProps, {}>({
  componentDidMount() {
    this.props.loadPassengerVolAsync
      ? this.props.loadPassengerVolAsync()
      : noop();
  }
});

// Ignore types for first two generic types of connect for convenience
export const MainMapContainer = compose(
  // connect to store
  connect<{}, {}, IMainMapProps, RootState>(
    mapStateToProps,
    mapDispatchToProps
  ),
  // Google map props
  googleMapReactProps,
  // Inserting google api scrips
  withScriptjs,
  // GoogleMap HOC
  withGoogleMap,
  // DidMount lifecycle
  componentDidMount
)(MainMap);
