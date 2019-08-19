# Uber Clone

A Uber clone app made with React Native.

This app only have the basic funcionallity of the real app like showing a map with a search box. It does not show cars on the map and also does not have authentication.

## What the app can do?

- Get user's current location.
- Use the Google Directions to suggest adresses while the user is typing in the search box.
- Draws the path to the destination.
- Calculate the estimated value of the ride.

## Requirements

- You need to put a Google Maps API key in a `config.js` file in the `src` folder. Example: 

```
const config = {
    maps_api_key: 'An_api_key'
}
export default config;

```

## Libraries used

- Expo
- Styled Components (Stylization)
- React Native Maps (Map component)
- React Native Maps Directions (Getting the addresses and estimating distance)
- React Native Google Places Autocomplete (Address search box with autocomplete)
- React Native Geocoding (Get address by passing a latitude and longitude)