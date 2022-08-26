import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Home from './Screens/Home';


export default function App() {
  const Stack = createNativeStackNavigator();

  var globalOptions = {
    headerStyle: {backgroundColor: 'rgb(110, 216, 233)'},
    headerTitleStyle: {color:"black"},
    headerTitleAlign: 'center'
  }

  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={globalOptions}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
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