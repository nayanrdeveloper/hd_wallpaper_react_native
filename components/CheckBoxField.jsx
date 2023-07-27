import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";
import React from "react";

export default function CheckBoxField({ label, checked, onChange }) {
  return (
    <View className="flex-row space-x-2 items-center mt-2">
      <Checkbox
        value={checked}
        onValueChange={onChange}
        color={checked ? "#4630EB" : undefined}
        className=""
      />
      <Text className="font-semibold" style={{ fontSize: 12 }}>
        {label}
      </Text>
    </View>
  );
}
