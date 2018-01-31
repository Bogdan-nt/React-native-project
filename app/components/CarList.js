import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";

const { width, height } = Dimensions.get("window");
const lambo = require("../images/a.jpg");
const r8 = require("../images/b.jpg");
const m3 = require("../images/c.jpg");
const mclaren = require("../images/d.jpg");

const styles = StyleSheet.create({
  image: {
    width,
    height: Math.floor(height * 0.3),
    justifyContent: "flex-end"
  },
  title: {
    color: "white",
    fontSize: 30,
    padding: 5,
    backgroundColor: "transparent"
  }
});

const imageAndText = (imageSource, text, navigation) => (
  <TouchableOpacity onPress={() => navigation.navigate("Car", { name: text })}>
    <ImageBackground source={imageSource} style={styles.image}>
      <Text style={styles.title}>{text}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

const CarList = ({ navigation }) => (
  <ScrollView>
    {imageAndText(lambo, "Lamborghini-Aventedor", navigation)}
    {imageAndText(r8, "Audi-R8-V10", navigation)}
    {imageAndText(m3, "BMW M3 V8", navigation)}
    {imageAndText(mclaren, "Mclaren-V12", navigation)}
  </ScrollView>
);

export default CarList;
