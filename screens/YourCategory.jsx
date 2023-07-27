import { View } from "react-native";
import React from "react";
import userImageCategory from "../data/userImageCategory";
import ImageCategory from "../components/ImageCategory";

export default function YourCategory() {
  return (
    <View className="flex-row space-x-3 flex-wrap px-3 mt-5">
      {userImageCategory.map((categoryItem) => {
        return (
          <ImageCategory
            key={categoryItem.id}
            id={categoryItem.id}
            name={categoryItem.name}
            image={categoryItem.image}
            route={categoryItem.route}
          />
        );
      })}
    </View>
  );
}
