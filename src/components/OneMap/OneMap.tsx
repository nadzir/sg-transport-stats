// import { Card, Elevation, Slider } from "@blueprintjs/core";
// import { latLngBounds } from "leaflet";
// import "leaflet/dist/leaflet.css";
// import { noop } from "lodash";
// import { ltaPassengerVolume } from "lta";
// import polyUtil from "polyline-encoded";
// import React from "react";
// import { Map, Polyline, TileLayer } from "react-leaflet";
// import {
//   BASEMAP,
//   MAP_DEFAULT_SETTING,
//   NORTHEAST,
//   SOUTHWEST
// } from "./OneMap.constants";

// export interface IOneMapProps {
//   passengerVols?: ltaPassengerVolume[];
//   setTime?: (time: string) => any;
//   loadPassengerVolAsync?: () => any;
//   time?: string;
// }

// // Set Zoom limits
// export const onZoomend = e => {
//   const zoom = e.target.getZoom();
//   const map = e.target;

//   if (zoom < 12) {
//     map.setZoom(12);
//   }
// };

// export const OneMap = ({ passengerVols, setTime, time }: IOneMapProps) => {
//   const DEFAULT_VIEWPORT = {
//     center: [MAP_DEFAULT_SETTING.lat, MAP_DEFAULT_SETTING.lng],
//     zoom: MAP_DEFAULT_SETTING.zoom
//   };

//   const mapBounds = latLngBounds(SOUTHWEST, NORTHEAST);

//   const polyline = () => {
//     return (passengerVols || []).map(passengerVol => {
//       if (passengerVol.polyline === null) {
//         return;
//       }
//       if (passengerVol.timePerHour !== parseInt(time + "", 10)) {
//         return;
//       }
//       const polylines = passengerVol.polyline.split("[,]");
//       const latlngs = polylines.reduce((latlngs, polyline) => {
//         const _latlngs = polyUtil.decode(polyline, {
//           precision: 5
//         });

//         return [...latlngs, ..._latlngs];
//       }, []);
//       // console.log(polylines);
//       // console.log(latlngs.map(latlng => {
//       //   return {
//       //     lat: latlng[0],
//       //     lng: latlng[1]
//       //   };
//       // }))
//       // console.log(passengerVol)
//       return (
//         <Polyline
//           key={
//             passengerVol.originPtCode.busStopCode +
//             passengerVol.destinationPtCode.busStopCode +
//             passengerVol.timePerHour +
//             passengerVol.dayType
//           }
//           color={getColour(passengerVol.totalTrips)}
//           positions={latlngs.map(latlng => {
//             return {
//               lat: latlng[0],
//               lng: latlng[1]
//             };
//           })}
//         />
//       );
//     });
//   };

//   const getColour = (trips: number) => {
//     if (trips <= 30) {
//       return "#D2D7D3";
//     }
//     if (trips <= 50) {
//       return "#BDC3C7";
//     }
//     if (trips <= 80) {
//       return "#48929B";
//     }
//     if (trips <= 100) {
//       return "#BE90D4";
//     }
//     return "#C93756";
//   };

//   return (
//     <Card interactive={true} elevation={Elevation.TWO}>
//       <Map
//         styleName="map"
//         // zoom={13}
//         // center={[51.505, -0.09]}
//         viewport={DEFAULT_VIEWPORT}
//         // onZoomend={onZoomend}
//         maxBounds={mapBounds}
//         scrollWheelZoom={false}
//         style={{ width: "100%", height: "600px" }}
//       >
//         <TileLayer url={BASEMAP} />
//         {/* <Polyline
//           positions={[
//             { lat: 1.33973, lng: 103.75838 },
//             { lat: 1.39464, lng: 103.81091 },
//             { lat: 1.39464, lng: 103.81091 }
//           ]}
//         /> */}
//         {polyline()}
//       </Map>
//       <Slider
//         min={0}
//         max={24}
//         stepSize={1}
//         labelStepSize={1}
//         onChange={value => (setTime ? setTime(value + "") : noop)}
//         // labelRenderer={this.renderLabel3}
//         showTrackFill={false}
//         value={parseInt(time, 10)}
//         // vertical={vertical}
//       />
//     </Card>
//   );
// };
