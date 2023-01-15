import React from "react";
import Home from "./Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

// Define the config


export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator  screenOptions={{
       headerShown: false
    }}>
      <Tab.Screen  name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
    </NavigationContainer>
  
  );
}
