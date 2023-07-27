import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React, { useEffect } from "react";

export default function Background(props) {
  return (
    <View className="h-screen">
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        className="h-screen w-screen px-5 py-14"
      >
        <View
          className="border-4 border-solid border-white rounded-3xl h-screen"
          style={
            props.position === "left" ? styles.leftContainer : styles.container
          }
        >
          {props.children}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  leftContainer: {
    flex: 1,
    // alignItems: "center",
  },
});
