import { View } from "react-native";
import React from "react";
import Header from "../layouts/Header";
import { CategoryTopTab } from "../navigations";

export default function ImageCategoryScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <CategoryTopTab />
    </View>
  );
}
