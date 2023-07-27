import { View, Text, TextInput, Button, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Background from "../layouts/Background";
import { InputField } from "../components";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <Background>
      <View className="bg-white p-5 flex-col space-y-3">
        <InputField label={"Mobile Number"} placeholder="" />
        <View className="flex-col space-y-2 rounded-2xl">
          <Text className="text-[#969696]">Password</Text>
          <View className="flex-row  border-2 border-solid border-[#D1D1D1]">
            <TextInput placeholder="" className="w-64 h-10" />
            <Image
              className="w-6 h-6 mt-2 mr-2"
              source={require("../assets/eye_hide.png")}
            />
          </View>
        </View>
        <Text className="text-center text-[#969696]">Forgot Password?</Text>
        <View>
          <Button
            className="bg-[#064851] text-white"
            title="Login"
            color="#064851"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View>
          <Text className="text-[#A2A2A2] text-center">
            New{" "}
            <Text
              className="text-black font-semibold px-1 py-1"
              onPress={() => navigation.navigate("SignUp")}
            >
              Sign-up &nbsp;
            </Text>
            for a new Account
          </Text>
        </View>
      </View>
    </Background>
  );
}
