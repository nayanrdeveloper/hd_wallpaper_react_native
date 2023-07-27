import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Background from "../layouts/Background";
import OTPNumberBox from "../components/OTPNumberBox";

export default function OtpConfirmScreen() {
  const navigation = useNavigation();
  const [optNumber, setOTPNumber] = useState({
    number1: "",
    number2: "",
    number3: "",
    number4: "",
    number5: "",
    number6: "",
  });
  return (
    <Background position="left">
      <View>
        <View className="flex-row items-center ml-10 mt-10">
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Image
              className="w-8 h-8 mt-2 mr-2"
              source={require("../assets/x-circle.png")}
            />
          </TouchableOpacity>
          <Text className="text-white ml-32 font-bold text-xl">Sign Up</Text>
        </View>
      </View>
      <View className="flex-col space-y-5" style={styles.container}>
        <Text className="text-white text-4xl font-bold">Enter the Code</Text>
        <Text className="text-white text-xl">we sent OTP to your mobile</Text>
        <View className="flex-row items-center">
          <Text className="text-white">+91 xxxxxxxx</Text>
          <View className="ml-10 bg-white px-4 py-1">
            <Text className="text-[#064851]">Edit</Text>
          </View>
        </View>
        <View className="flex-row space-x-2">
          <OTPNumberBox
            onChangeText={(text) =>
              setOTPNumber({ ...optNumber, number1: text })
            }
            value={optNumber.number1}
            placeholder=""
          />
          <OTPNumberBox
            onChangeText={(text) =>
              setOTPNumber({ ...optNumber, number2: text })
            }
            value={optNumber.number2}
            placeholder=""
          />
          <OTPNumberBox
            onChangeText={(text) =>
              setOTPNumber({ ...optNumber, number3: text })
            }
            value={optNumber.number3}
            placeholder=""
          />
          <OTPNumberBox
            onChangeText={(text) =>
              setOTPNumber({ ...optNumber, number4: text })
            }
            value={optNumber.number4}
            placeholder=""
          />
          <OTPNumberBox
            onChangeText={(text) =>
              setOTPNumber({ ...optNumber, number5: text })
            }
            value={optNumber.number5}
            placeholder=""
          />
          <OTPNumberBox
            onChangeText={(text) =>
              setOTPNumber({ ...optNumber, number6: text })
            }
            value={optNumber.number6}
            placeholder=""
          />
        </View>
        <Text className="text-white">
          Having trouble? request new OTP in 00:59
        </Text>
        <TouchableOpacity
          className="bg-white px-4 py-2 w-20 self-center"
          onPress={() => navigation.navigate("ImageCategory")}
        >
          <Text className="text-[#064851]">Submit</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
