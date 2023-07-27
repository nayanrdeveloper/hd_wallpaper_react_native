import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../layouts/Header";
import { CategoryTopTab } from "../navigations";
import PrimaryButton from "../components/PrimaryButton";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const userImage =
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  return (
    <View style={{ flex: 1 }} className="bg-white">
      <Header />
      <View className="flex-row space-x-3 justify-evenly items-center mt-5">
        <View>
          <Image
            source={{ uri: userImage }}
            className="h-24 w-24 rounded-full"
          />
          <Text
            className="text-center font-semibold"
            onPress={() => navigation.navigate("ProfileSettings")}
          >
            Alixa Bliss
          </Text>
        </View>
        <View className="">
          <Text className="font-semibold text-center">15.5k</Text>
          <Text className="text-[#969696] text-center">Followers</Text>
        </View>
        <View>
          <Text className="font-semibold text-center">999</Text>
          <Text className="text-[#969696] text-center">Following</Text>
        </View>
      </View>
      <View className="px-5 mt-5">
        <PrimaryButton title={"FOLLOW"} accessibilityLabel="Follow User" />
      </View>
      <CategoryTopTab />
    </View>
  );
}
