import { Card, Elevation } from "@blueprintjs/core";
import { latLngBounds } from "leaflet";
import "leaflet/dist/leaflet.css";
import { ltaPassengerVolume } from "lta";
import React from "react";
import { Map, Polyline, TileLayer } from "react-leaflet";
import {
  BASEMAP,
  MAP_DEFAULT_SETTING,
  NORTHEAST,
  SOUTHWEST
} from "./OneMap.constants";

export interface IOneMapProps {
  passengerVols?: ltaPassengerVolume[];
  setTime?: (time: string) => any;
  loadPassengerVolAsync?: () => any;
  time?: string;
}

// Set Zoom limits
export const onZoomend = e => {
  const zoom = e.target.getZoom();
  const map = e.target;

  if (zoom < 12) {
    map.setZoom(12);
  }
};

export const OneMap = () => {
  const DEFAULT_VIEWPORT = {
    center: [MAP_DEFAULT_SETTING.lat, MAP_DEFAULT_SETTING.lng],
    zoom: MAP_DEFAULT_SETTING.zoom
  };

  const mapBounds = latLngBounds(SOUTHWEST, NORTHEAST);

  return (
    <Card interactive={true} elevation={Elevation.TWO}>
      <Map
        styleName="map"
        // zoom={13}
        // center={[51.505, -0.09]}
        viewport={DEFAULT_VIEWPORT}
        // onZoomend={onZoomend}
        maxBounds={mapBounds}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "600px" }}
      >
        <TileLayer url={BASEMAP} />
        <Polyline
          positions={[
            { lat: 1.33973, lng: 103.75838 },
            { lat: 1.39464, lng: 103.81091 },
            { lat: 1.39464, lng: 103.81091 }
          ]}
        />
      </Map>
    </Card>
  );
};
