import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import MainMenu from "./page/dashboard2";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AgakLaen } from "./apps/content/agaklaen";
import { Landofbad } from "./apps/content/landofbad";
import { Kursi } from "./apps/seats";
Landofbad;
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Dashboard"
          options={{
            headerShown: false,
          }}
          component={MainMenu}
        />
        <Stack.Screen
          name="AgakLaen"
          component={AgakLaen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="land of bad"
          component={Landofbad}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Pilih Kursi"
          component={Kursi}
          options={{
            headerTitle: 24,
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#05103A",
            },
            headerTitleStyle: {
              fontSize: 16,
              color: "#fff",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
