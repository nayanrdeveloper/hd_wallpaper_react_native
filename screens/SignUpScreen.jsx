import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Background from "../layouts/Background";
import { InputField, CheckBoxField } from "../components";
import PrimaryButton from "../components/PrimaryButton";

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  const [signUpData, setSignUpData] = useState({
    user: "",
    mobile: "982XXXXXX39",
    password: "",
    confirmPassword: "",
    countryCode: "+91",
  });
  return (
    <Background>
      <View className="bg-white py-5 px-5 mx-3 flex-col space-y-3">
        <InputField
          label={"User Name"}
          onChangeText={(text) => setSignUpData({ ...signUpData, user: text })}
          value={signUpData.user}
          placeholder=""
        />
        <View className="flex-col space-y-2 rounded-2xl">
          <Text className="text-[#969696]">Mobile Number</Text>
          <View className="flex-row space-x-2">
            <TextInput
              placeholder=""
              value={signUpData.countryCode}
              onChangeText={(text) =>
                setSignUpData({ ...signUpData, countryCode: text })
              }
              className="border-2 border-solid border-[#D1D1D1] w-10  h-12 p-2 font-semibold"
            />
            <TextInput
              placeholder=""
              className="border-2 border-solid border-[#D1D1D1] w-60  h-12 p-2 font-semibold"
              keyboardType="phone-pad"
              value={signUpData.mobile}
              onChangeText={(text) =>
                setSignUpData({ ...signUpData, mobile: text })
              }
            />
          </View>
        </View>
        <InputField
          value={signUpData.password}
          secureTextEntry={true}
          onChangeText={(text) =>
            setSignUpData({ ...signUpData, password: text })
          }
          label={"Password"}
          placeholder=""
        />
        <InputField
          label={"Confirm Password"}
          placeholder=""
          secureTextEntry={true}
          value={signUpData.confirmPassword}
          onChangeText={(text) =>
            setSignUpData({ ...signUpData, confirmPassword: text })
          }
        />
        <CheckBoxField
          label={"Accept Our Terms and Condition and Policy"}
          checked={isChecked}
          onChange={setChecked}
        />
        <View>
          <PrimaryButton
            accessibilityLabel={"Learn more about this purple button"}
            onPress={() => navigation.navigate("OTPConfirm")}
            title={"NEXT"}
          />
        </View>
        <View>
          <Text className="" style={{ fontSize: 13 }}>
            By Submitting this form, you agree and accept company's{" "}
            <Text className="text-[#008EA2]">Terms and conditions</Text> and{" "}
            <Text className="text-[#008EA2]">Privacy policy</Text> and allow
            company to contact you by email and sms for transactions and
            notifications
          </Text>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  conditionText: {
    fontSize: "5px",
  },
});
