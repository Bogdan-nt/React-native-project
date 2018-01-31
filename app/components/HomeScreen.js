import React from "react";
import { StyleSheet, View } from "react-native";
import CarList from "./CarList";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <CarList navigation={navigation}/>
  </View>
);

export default HomeScreen;
