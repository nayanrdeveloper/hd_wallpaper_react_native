import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AllCategory,
  HomeScreen,
  ImageCategoryScreen,
  ImageDownloadScreen,
  ImageScreen,
  LoginScreen,
  OtpConfirmScreen,
  ProfileScreen,
  ProfileSettings,
  SignUpScreen,
  UploadImage,
  YourCategory,
} from "../screens";
import React from "react";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="OTPConfirm" component={OtpConfirmScreen} />
      <Stack.Screen name="ImageCategory" component={ImageCategoryScreen} />
      <Stack.Screen name="Images" component={ImageScreen} />
      <Stack.Screen name="DownloadImage" component={ImageDownloadScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
      <Stack.Screen name="UploadImage" component={UploadImage} />
    </Stack.Navigator>
  );
}
