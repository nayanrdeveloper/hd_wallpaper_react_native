import { View, ScrollView } from "react-native";
import React from "react";
import ImageCategory from "../components/ImageCategory";
import imageCategoryList from "../data/imageCategory";

export default function AllCategory() {
  return (
    <ScrollView>
      <View className="flex-row space-x-3 flex-wrap px-3 mt-5">
        {imageCategoryList.map((categoryItem) => {
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
    </ScrollView>
  );
}
