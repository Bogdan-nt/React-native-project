import React from "react";
import { ScrollView, Text } from "react-native";

const CarDetails = ({ navigation }) => (
  <ScrollView>
    <Text>Hello, this is the {navigation.state.params.name}!</Text>
  </ScrollView>
);

export default CarDetails;
