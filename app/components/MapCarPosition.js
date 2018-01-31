import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Keyboard, Animated } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import MapView from 'react-native-maps';


const styles = StyleSheet.create({
  container: {
    //...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});


export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: ""
    };
    this.onRegionChange.bind(this);
  }


  static navigationOptions = {
    title: 'Map',
  };

  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
    };
  }

  onRegionChange(region) {
      this.setState({ region: region });
  }
  

  render() {
    return (
      <View>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={() => this.onRegionChange.bind(this)}
        >
        </MapView>
      </View>
      <View>
      <FormInput
        onEndEditing={(number) => {
          region = this.state.region;
          if(!region)
            region = {
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            };
          this.setState({ region: {
            latitude: Number(number),
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
          } });
        }} 
        placeholder="Lattitude"
      />
    </View>
    <View>
    <FormInput
        onEndEditing={(number) => {
          region = this.state.region;
          if(!region)
            region = {
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            };
          this.setState({ region: {
            latitude: region.latitude,
            longitude: Number(number) ,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
          } });
        }} 
        placeholder="Longitude"
      />
    </View>
    </View>
    );
  }

}
