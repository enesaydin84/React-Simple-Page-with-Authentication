import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

import "./map.css";

const location = {
  address: "İzmir Valiliği",
  lat: 38.421809,
  lng: 27.131042,
}; // our location object from earlier

const location1 = {
  address: "Manisa Valiliği",
  lat: 38.614033,
  lng: 27.429562,
}; //

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

const Map = () => (
  <div className="map">
    <h2 className="map-h2">Car Location</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "Your Key Here" }}
        defaultCenter={location}
        defaultZoom={10}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
        <LocationPin
          lat={location1.lat}
          lng={location1.lng}
          text={location1.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
