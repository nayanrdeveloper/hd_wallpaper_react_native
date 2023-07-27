import { View, Text, TextInput } from "react-native";
import React from "react";

export default function OTPNumberBox({ placeholder, value, onChangeText }) {
  return (
    <TextInput
      placeholder={placeholder}
      className="bg-otpBox w-10  h-10 p-2 text-white text-2xl text-center mx-2 rounded-md"
      maxLength={1}
      value={value}
      onChangeText={onChangeText}
    />
  );
}
