import React from "react";
import MapViewDirections from "react-native-maps-directions";
import config from "../../config";
// import { Container } from './styles';

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey={config.maps_api_key}
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
