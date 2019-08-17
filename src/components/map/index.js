import React, { Component } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";

// import { Container } from './styles';

export default class Map extends Component {
  state = {
    region: null
  };
  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134
          }
        });
      },
      () => {},
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000
      }
    );
  }

  render() {
    const { region } = this.state;
    return (
      <MapView
        style={{ flex: 1 }}
        region={region}
        showsUserLocation
        loadingEnabled
      />
    );
  }
}
