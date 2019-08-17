import React, { Component, Fragment } from "react";
import { View, Dimensions, PermissionsAndroid } from "react-native";
import MapView, { Marker } from "react-native-maps";

import markerImage from "../../assets/marker.png";

import Search from "../Search";
import Directions from "../Directions";
import { getPixelSize } from "../../utils";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Map extends Component {
  state = {
    region: null,
    destination: null
  };
  async componentDidMount() {
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    if (granted) {
      try {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { coords } = position;
            this.setState({
              region: {
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
              }
            });
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      } catch (e) {
        console.error(
          "An error ocurred while trying to get the current position"
        );
      }
    } else {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
    }
  }
  handleLocationSelected = (data, { geometry }) => {
    const {
      location: { lat: latitude, lng: longitude }
    } = geometry;
    console.log(this.state.region);
    this.setState({
      destination: {
        latitude,
        longitude,
        title: data.structured_formatting.main_text
      }
    });
  };
  render() {
    const { region, destination } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={region}
          region={region}
          showsUserLocation
          loadingEnabled
          ref={el => (this.mapView = el)}
        >
          {destination && (
            <Fragment>
              <Directions
                origin={region}
                destination={destination}
                onReady={result => {
                  this.mapView.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      top: getPixelSize(50),
                      bottom: getPixelSize(50),
                      left: getPixelSize(50),
                      right: getPixelSize(50)
                    }
                  });
                }}
              />
              <Marker
                coordinate={destination}
                anchor={{ x: 0, y: 0 }}
                image={markerImage}
              />
            </Fragment>
          )}
        </MapView>
        <Search onLocationSelected={this.handleLocationSelected} />
      </View>
    );
  }
}
