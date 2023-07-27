import { View, Text, TextInput } from "react-native";
import React from "react";

export default function InputField({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) {
  return (
    <View className="flex-col space-y-2 rounded-2xl mt-1">
      <Text className="text-[#969696]">{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        className="border-2 border-solid border-[#D1D1D1] w-[10rem] h-12 p-2"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
