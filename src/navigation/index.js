import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Camera, Calendar } from "../screens";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../../theme";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Camera") {
            iconName = focused ? (
              <FontAwesome name="camera" size={24} color={theme.primary} />
            ) : (
              <FontAwesome name="camera" size={24} color={theme.white} />
            );
          } else if (route.name === "Calendar") {
            iconName = focused ? (
              <MaterialCommunityIcons
                name="calendar"
                size={30}
                color={theme.primary}
              />
            ) : (
              <MaterialCommunityIcons
                name="calendar"
                size={30}
                color={theme.white}
              />
            );
          }

          return iconName;
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.secondary2,
        },
      })}
    >
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
