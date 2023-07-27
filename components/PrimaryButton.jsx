import { View, Text, Button } from "react-native";
import React from "react";

export default function PrimaryButton({ onPress, title, accessibilityLabel }) {
  return (
    <Button
      onPress={onPress}
      className="bg-[#064851] text-white"
      title={title}
      color="#064851"
      accessibilityLabel={accessibilityLabel}
    />
  );
}
