import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import imageList from "../data/images";
import Header from "../layouts/Header";

export default function ImageScreen({ route }) {
  const navigation = useNavigation();
  const { id, name } = route.params;
  return (
    <ScrollView>
      <Header />
      <View className="flex-row justify-between items-center mt-3 border-b border-solid mx-2 border-[#C5C5C5]">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/icons/left_side.png")}
            className="h-10 w-10"
          />
        </TouchableOpacity>
        <View>
          <Text className="text-xl font-semibold">{name}</Text>
        </View>
        <View></View>
      </View>
      <View className="flex-row gap-x-2 gap-y-2 flex-wrap px-5 mt-3">
        {imageList.map((imageItem) => {
          return (
            <TouchableOpacity
              key={imageItem.id}
              onPress={() =>
                navigation.navigate("DownloadImage", {
                  id: imageItem.id,
                  image: imageItem.image,
                  name: imageItem.name,
                })
              }
            >
              <Image
                source={{ uri: imageItem.image }}
                className="h-28 w-28 rounded-md"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}
