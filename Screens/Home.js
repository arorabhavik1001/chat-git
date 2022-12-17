import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { Avatar, ListItem } from "react-native-elements";
import 'react-native-gesture-handler'
import firebase from 'firebase';
import Constants from "expo-constants";

const auth = firebase.auth();

export default function Home({route, navigation}) {

  // let customFonts = {
  //   "regular-sf-pro": require("../assets/fonts/regular-sf-pro.ttf"),
  // };

  const {userDetails} = route.params;

  const signOut = () => {
    auth.signOut();
    navigation.replace("Login");
  }

  const routeToChat = () => {
    navigation.navigate("Chat")
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "ChatGit",
      headerLeft: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            // width: 100,
          }}
        >
          <TouchableOpacity>
            <Avatar
              rounded
              source={{
                uri:
                  userDetails.image ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU",
              }}
              onPress={signOut}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <View style={styles.Mcontainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Chats</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            // width: 100,
          }}
        >
          <TouchableOpacity>
            <Avatar
              rounded
              source={{
                uri:
                  userDetails.image ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU",
              }}
              onPress={signOut}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.seperator} />
      <View style={styles.container}>
        <StatusBar style="auto" />
        <TouchableOpacity style={styles.unreadChat} onPress={routeToChat}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Avatar
              rounded
              size="medium"
              source={{
                uri:
                  userDetails.image ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU",
              }}
            />
            <View style={{ paddingLeft: 10, flex: 1 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#2a2b2c" }}
              >
                Bhavik
              </Text>
              <Text style={{ color: "#777778" }} numberOfLines={1}>
                Hey, how are you?
              </Text>
            </View>
            <View
              style={{
                marginRight: 10,
                backgroundColor: "#4b6cdb",
                padding: 10,
                borderRadius: 100,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>4</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.readChat} onPress={routeToChat}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Avatar
              rounded
              size="medium"
              source={{
                uri:
                  userDetails.image ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU",
              }}
            />
            <View style={{ paddingLeft: 10, paddingTop: 2 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#2a2b2c" }}
              >
                Bhavik
              </Text>
              <Text style={{ color: "#777778" }}>Hey, how are you?</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.readChat}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Avatar
              rounded
              size="medium"
              source={{
                uri:
                  userDetails.image ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU",
              }}
            />
            <View style={{ paddingLeft: 10, paddingTop: 2 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#2a2b2c" }}
              >
                Bhavik
              </Text>
              <Text style={{ color: "#777778" }}>Hey, how are you?</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.readChat}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Avatar
              rounded
              size="medium"
              source={{
                uri:
                  userDetails.image ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU",
              }}
            />
            <View style={{ paddingLeft: 10, paddingTop: 2 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "#2a2b2c" }}
              >
                Bhavik
              </Text>
              <Text style={{ color: "#777778" }}>Hey, how are you?</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* <View style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{ uri: "https://i.ibb.co/26h4fKM/no-Messages.png" }}
            style={{
              width: 150,
              height: 150,
              marginBottom: 20,
              marginTop: -100,
            }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 26, color: "#2a2b2c" }}>
            No Chats
          </Text>
          <Text style={{ color: "#777778" }}>Messages from users appear here</Text>
        </View> */}
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
    backgroundColor: "rgb(197, 226, 245)",
    width: "93%",
    height: 70,
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
  },
  readChat: {
    borderBottomColor: "rgb(237, 248, 255)",
    borderBottomWidth: 1,
    width: "93%",

    height: 70,
    borderRadius: 10,
    padding: 10,
    // paddingBottom: 20,
    backgroundColor: "rgb(235, 244, 250)",
    marginBottom: 8,
  },
  heading: {
    fontWeight: "700",
    fontSize: 30,
    // fontFamily: "regular-sf-pro",
    color: "#1b2a3a",
    // paddingLeft: 20,
  },
  headingContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
});