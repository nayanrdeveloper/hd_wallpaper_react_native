import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useFonts, Italiana_400Regular } from "@expo-google-fonts/italiana";
import { useNavigation } from "@react-navigation/native";


export default function HomeScreen() {
    const navigation = useNavigation();
    let [fontsLoaded] = useFonts({
        Italiana_400Regular,
      });
      useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Login")
        },2000)
      },[])
  return (
    <View>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        className="h-screen w-screen px-5 py-14"
      >
        <View
          className="border-4 border-solid border-white rounded-3xl h-screen"
          style={styles.container}
        >
          {fontsLoaded && (
            <Text
              className="text-white text-4xl text-center w-40 font-semibold"
              style={styles.headerText}
            >
              HD Wallpaper
            </Text>
          )}
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
    headerText:{
        fontFamily: "Italiana_400Regular"
    }
  });
