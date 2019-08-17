import React, { Component } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";

// import { Container } from './styles';

export default class MapIndex extends Component {
  async componentDidMount() {}

  render() {
    return (
      <View>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: -27.210753,
            longitude: -49.644183,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134
          }}
          showsUserLocation
          loadingEnabled
        />
      </View>
    );
  }
}
