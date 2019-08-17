import React, { Component } from "react";
import { Platform } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import config from "../../config";

export default class Search extends Component {
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Para onde?"
        placeholderTextColor="#333"
        onPress={(data, details) => {
          console.log(data, details);
        }}
        query={{
          key: config.maps_api_key,
          language: "pt"
        }}
        textInputProps={{
          autoCapitalize: "none",
          autoCorrect: false
        }}
        fetchDetails
        enablePoweredByContainer={false}
        styles={styles}
      />
    );
  }
}
const styles = {
  container: {
    position: "absolute",
    top: Platform.select({ ios: 60, android: 40 }),
    width: "100%"
  },
  textInputContainer: {
    flex: 1,
    backgroundColor: "transparent",
    height: 54,
    marginHorizontal: 20,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  textInput: {
    height: 54,
    margin: 0,
    borderRadius: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      x: 0,
      y: 0
    },
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 18
  },
  listView: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      x: 0,
      y: 0
    },
    shadowRadius: 15,
    marginTop: 10
  },
  description: {
    fontSize: 14
  },
  row: {
    padding: 20,
    height: 60
  }
};
