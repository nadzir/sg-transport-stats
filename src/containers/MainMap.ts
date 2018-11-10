import { addDirection } from "@src/actions";
import {
  containerElement,
  IMainMapProps,
  loadingElement,
  MainMap,
  mapElement
} from "@src/components/MainMap";
import { IMapState } from "@src/reducers/map";
import { directionService } from "@src/services/direction";
import { RootDispatch, RootState } from "@src/types";
import { withGoogleMap, withScriptjs } from "react-google-maps";
import { connect } from "react-redux";
import { compose, lifecycle, withProps } from "recompose";

const mapStateToProps = (state: RootState): IMapState => ({
  directions: state.map.directions
});

const mapDispatchToProps = (dispatch: RootDispatch): IMainMapProps => ({
  addDirection: (direction: google.maps.DirectionsResult) =>
    dispatch(addDirection(direction))
});

const apiKey = process.env.GOOGLE_MAP_API_KEY || "";
const googleMapReactProps = withProps({
  containerElement,
  googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
  loadingElement,
  mapElement
});

const componentDidMount = lifecycle<IMainMapProps, {}>({
  componentDidMount() {
    const destination = new google.maps.LatLng(1.383764, 103.7583);
    const origin = new google.maps.LatLng(1.297709, 103.85322474);
    directionService(destination, origin, this.props.addDirection);
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
