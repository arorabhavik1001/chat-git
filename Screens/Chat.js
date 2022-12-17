import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
} from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import 'react-native-gesture-handler'
import firebase from 'firebase';
import Constants from "expo-constants";
import {Ionicons} from "@expo/vector-icons";
import * as Font from "expo-font";

const auth = firebase.auth();

export default function Home({navigation}) {
  function cacheFonts(fonts) {
    return fonts.map((font) => Font.loadAsync(font));
  }

  cacheFonts([Ionicons.font]);
  
  return (
    <View style={styles.Mcontainer}>
      <View style={styles.headingContainer}>
        <Avatar
          rounded
          size="small"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU",
          }}
        />
        <Text style={styles.heading}>Bhavik Arora</Text>
      </View>
      <View style={styles.seperator} />
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
      <View style={styles.footer}>
        {/* <Ionicons
          name="attach"
          size={24}
          color="#0b5139"
          // onPress={pickImage}
        /> */}
        <TextInput
          placeholder="Type a message..."
          style={styles.input}
          // onSubmitEditing={sendMessage}
          // value={chatInput}
          // onChangeText={(text) => {
          //   setChatInput(text);
          // }}
        />
        <TouchableOpacity activeOpacity={0.5}>
          <Ionicons name="send" size={24} color="#38d49d" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    borderTop: "1px solid black",
  },
  Mcontainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight + 20,
    // justifyContent: "center",
  },
  seperator: {
    borderBottomColor: "rgb(168, 168, 168)",
    borderBottomWidth: StyleSheet.hairlineWidth - 0.08,
    marginTop: 15,
    marginBottom: 20,
    // marginLeft:10,
    // marginRight:10
  },
  unreadChat: {
    backgroundColor: "rgb(237, 248, 255)",
    width: 370,
    height: 70,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  readChat: {
    borderBottomColor: "rgb(237, 248, 255)",
    borderBottomWidth: 1,
    width: 370,
    height: 70,
    borderRadius: 10,
    padding: 10,
    // paddingBottom: 20,
    marginBottom: 10,
  },
  heading: {
    fontWeight: "500",
    fontSize: 18,
    // fontFamily: "regular-sf-pro",
    color: "#2a2b2c",
    paddingLeft: 15,
  },
  headingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    borderColor: "transparent",
    backgroundColor: "#dbdbdb",
    borderWidth: 1,
    padding: 10,
    paddingLeft: 15,
    paddingBottom: 12,
    color: "rgb(237, 248, 255)",
    borderRadius: 30,
  },
  footer: {
    width: "100%",
    alignItems: "center",
    padding: 15,
    flexDirection: "row",
  },
});