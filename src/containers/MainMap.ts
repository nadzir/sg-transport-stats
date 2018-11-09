import {
  containerElement,
  IMainMapProps,
  loadingElement,
  MainMap,
  mapElement
} from "@src/components/MainMap";
import { ICountersState } from "@src/reducers/counter";
import { RootDispatch, RootState } from "@src/types";
import { withGoogleMap, withScriptjs } from "react-google-maps";
import { connect } from "react-redux";
import { compose, lifecycle, withProps } from "recompose";

const mapStateToProps = (state: RootState): ICountersState => ({
  value: state.counters.value
});

const mapDispatchToProps = (dispatch: RootDispatch): IMainMapProps => ({});

const apiKey = process.env.GOOGLE_MAP_API_KEY || "";
const googleMapReactProps = withProps({
  containerElement,
  googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
  loadingElement,
  mapElement
});

const componentDidMount = lifecycle<IMainMapProps, {}>({
  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route(
      {
        destination: new google.maps.LatLng(41.85258, -87.65141),
        origin: new google.maps.LatLng(41.85073, -87.65126),
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          // console.error(`error fetching directions ${result}`);
        }
      }
    );
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
