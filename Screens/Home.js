import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Avatar } from 'react-native-elements';
import 'react-native-gesture-handler'
import firebase from 'firebase';

const auth = firebase.auth();

export default function Home({route, navigation}) {

  const {userDetails} = route.params;

  const signOut = () => {
    auth.signOut();
    navigation.replace("Login");
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
              source={{ uri: userDetails.image }}
              onPress={signOut}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
        <Text>Home Screen!!!</Text>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});