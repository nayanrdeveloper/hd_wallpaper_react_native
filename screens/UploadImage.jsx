import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import Header from "../layouts/Header";

export default function UploadImage() {
  const userImage =
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  const categoryList = ["Business", "Nature", "Bike", "Cars", "Girls"];
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View className="">
      <Header />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView} className="space-y-3">
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} className="self-end">
              <Image
                source={require("../assets/icons/close.png")}
                className="h-10 w-10"
              />
            </TouchableOpacity>
            <Text className="font-semibold text-xl">Are you Sure?</Text>
            <Text>Go to Back to Remove This Post</Text>
            <Pressable
              className="bg-[#064851] px-3 py-2 rounded-lg"
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text className="text-white font-semibold text-xl">Done</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View className="px-5 bg-white h-screen">
        <View className="flex-row space-x-3 items-center mt-5">
          <Image
            className="w-8 h-8 mt-2 mr-2 rounded-full"
            source={{ uri: userImage }}
          />
          <Text className="font-semibold text-xl">Alixa Bliss</Text>
        </View>
        <View className="space-y-5 mt-8 px-3">
          <View className="flex-row items-center space-x-2 rounded-lg justify-between">
            <Text className="text-[#064851] font-medium">Select Category</Text>
            <View className="border border-solid border-[#CAD7DD] bg-white">
              <SelectDropdown
                className="bg-white"
                data={categoryList}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                defaultValue="Business"
              />
            </View>
          </View>
          <View className="flex-row items-center space-x-2 rounded-lg justify-between">
            <Text className="text-[#064851] font-medium">Description</Text>
            <TextInput
              placeholder="write something or #hashtag"
              className="w-[200] h-20 border border-solid border-[#CAD7DD] px-2"
            />
          </View>
        </View>
        <View className="mt-10">
          <Image
            source={{
              uri: "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=400",
            }}
            className="h-60 w-44 rounded-lg"
          />
        </View>
        <View className="flex-row space-x-4 items-center mt-5 ml-10">
          <View className="bg-[#064851] px-10 py-3 rounded-md">
            <Text className="text-white font-semibold text-xl">Back</Text>
          </View>
          <TouchableOpacity
            className="bg-[#064851] px-10 py-3 rounded-md"
            onPress={() => setModalVisible(true)}
          >
            <Text className="text-white font-semibold text-xl">Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
