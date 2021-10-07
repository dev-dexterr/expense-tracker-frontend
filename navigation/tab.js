import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import plus from "../assets/plus.png";

//Font Awesome Icons
import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

// Views
import Login from "../views/Login";
import Signup from "../views/Signup";
import Home from "../views/Home";
import Profile from "../views/Profile";
import ProfileDetail from "../views/ProfileDetail";
import Setting from "../views/Settings";
import CustomHeader from "../components/customheader/CustomHeader";

const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 25,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: "black",
          borderRadius: 50,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const HomeTabs = () => {

  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name == "Home") {
              iconName = focused ? "home" : "home";
              color = focused ? "black" : "grey";
            } else if (route.name == "testscreen1") {
              iconName = focused ? "bar-chart-2" : "bar-chart-2";
              color = focused ? "black" : "grey";
            } else if (route.name == "testscreen2") {
              iconName = focused ? "trending-up" : "trending-up";
              color = focused ? "black" : "grey";
            } else if (route.name == "Profile") {
              iconName = focused ? "user" : "user";
              color = focused ? "black" : "grey";
            }

            return <Feather name={iconName} size={25} color={color} />;
          },
          tabBarIconStyle: {
            top: 15,
          },
          tabBarStyle: {
            //FLoating Tab Bar
            position: "absolute",
            bottom: 35,
            marginHorizontal: 20,
            backgroundColor: "#F5F7FA",
            //Max Height
            height: 60,
            borderRadius: 15,
            //Shadow
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="testscreen1" component={testscreen1} />
        <Tab.Screen
          name="testadd"
          component={testadd}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={plus}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: "white",
                  top: -15,
                }}
              ></Image>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen name="testscreen2" component={testscreen2} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
};

export default function App() {
  const navigation = useNavigation();
  return (
    <stack.Navigator>
      <stack.Screen
        component={Login}
        name="Login"
        options={{ headerShown: false }}
      />
      <stack.Screen
        component={Signup}
        name="Signup"
        options={{ headerShown: false }}
      />
      <stack.Screen
        component={HomeTabs}
        name="HomeTabs"
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <stack.Screen
        component={ProfileDetail}
        name="ProfileDetail"
        options={{
          headerTitle: "",
          headerTransparent: true,
          gestureEnabled: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <CustomHeader />
            </TouchableOpacity>
          ),
        }}
      />
      <stack.Screen
        component={Setting}
        name="Setting"
        options={{
          headerTitle: "",
          headerTransparent: true,
          gestureEnabled: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <CustomHeader />
            </TouchableOpacity>
          ),
        }}
      />
    </stack.Navigator>
  );
}

//Test screen
function testscreen1() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Text>testscreen1</Text>
    </View>
  );
}

function testscreen2() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Text>testscreen2</Text>
    </View>
  );
}

function testadd() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Text>test add</Text>
    </View>
  );
}
