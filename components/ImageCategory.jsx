import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function ImageCategory({ id, name, image, route }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="border border-solid border-black ml-2 mb-2 rounded-md"
      onPress={() => navigation.navigate("Images", { id: id, name: name })}
    >
      <Image source={{ uri: image }} className="w-28 h-28 rounded-md" />
      <Text className="text-[#064851] font-semibold text-center text-xl">
        {name}
      </Text>
    </TouchableOpacity>
  );
}
