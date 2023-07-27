import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../layouts/Header";
import menuIcon from "../assets/icons/menu(2).png";
import starIcon from "../assets/icons/star.png";
import bookmarkIcon from "../assets/icons/bookmark-white.png";
import shareIcon from "../assets/icons/share.png";
import star1Icon from "../assets/icons/star(1).png";
import privacyIcon from "../assets/icons/privacy.png";
import logoutIcon from "../assets/icons/logout.png";
import megaphoneIcon from "../assets/icons/megaphone.png";
import SettingItem from "../components/SettingItem";
import PrimaryButton from "../components/PrimaryButton";

export default function ProfileSettings() {
  const userImage =
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  const navigation = useNavigation();
  const settingsList = [
    {
      id: 1,
      name: "Your Posts",
      image: menuIcon,
      route: "",
      postCount: "120650",
    },
    {
      id: 2,
      name: "Star",
      image: starIcon,
      route: "",
      postCount: "11437",
    },
    {
      id: 3,
      name: "Saved Images",
      image: bookmarkIcon,
      route: "",
      postCount: "",
    },
    {
      id: 4,
      name: "Share This App",
      image: shareIcon,
      route: "",
      postCount: "",
    },
    {
      id: 5,
      name: "Rate app",
      image: star1Icon,
      route: "",
      postCount: "",
    },
    {
      id: 6,
      name: "Privacy Policy",
      image: privacyIcon,
      route: "",
      postCount: "",
    },
    {
      id: 7,
      name: "Sign Out",
      image: logoutIcon,
      route: "",
      postCount: "",
    },
    {
      id: 8,
      name: "Ads",
      image: megaphoneIcon,
      route: "",
      postCount: "",
    },
  ];
  return (
    <ScrollView>
      <Header />
      <View className="bg-white h-screen">
        <View className="flex-row justify-between py-4 px-3 items-center mt-3">
          <View>
            <View className="flex-row space-x-10 items-center justify-between">
              <Text className="font-semibold text-xl">User Name</Text>
              <Image
                className="w-6 h-6 mt-2"
                source={require("../assets/icons/write.png")}
              />
            </View>
            <View className="flex-row space-x-10 items-center justify-between">
              <Text className="font-semibold text-xl">91xxxxxxxxx</Text>
              <Image
                className="w-6 h-6 mt-2"
                source={require("../assets/icons/write.png")}
              />
            </View>
          </View>
          <View className="space-y-2 items-center">
            <Image
              className="w-20 h-20 rounded-full mb-2"
              source={{ uri: userImage }}
            />
            <PrimaryButton
              title={"Upload Profile"}
              onPress={() => navigation.navigate("UploadImage")}
            />
          </View>
        </View>
        <View className="space-y-1 mt-8">
          {settingsList.map((settingItem) => {
            return (
              <SettingItem
                key={settingItem.id}
                id={settingItem.id}
                image={settingItem.image}
                name={settingItem.name}
                postCount={settingItem.postCount}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
