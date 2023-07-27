import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function SettingItem({ id, image, name, postCount }) {
  return (
    <TouchableOpacity
      key={id}
      className="flex-row justify-between mx-1 px-1 py-4 border-b border-solid border-[#1E1B3E]"
    >
      <View className="flex-row space-x-3 items-center">
        <Image className="w-6 h-6" source={image} />
        <Text className="text-[#064851] text-xl font-medium">{name}</Text>
      </View>
      <View className="flex-row space-x-2 items-center">
        {postCount && (
          <View className="bg-[#F2C525] px-4 py-1 rounded-md">
            <Text className="text-white font-semibold">{postCount}</Text>
          </View>
        )}
        <Image
          className="w-6 h-6"
          source={require(`../assets/icons/right-arrow(1).png`)}
        />
      </View>
    </TouchableOpacity>
  );
}
