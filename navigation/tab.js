import React, { useEffect } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import plus from "../assets/plus.png";
import COLOR from '../utils/colors.js';

//Font Awesome Icons
import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

//Redux
import { shallowEqual, useSelector } from "react-redux";

// Views
import Login from "../views/Login";
import Signup from "../views/Signup";
import Home from "../views/Home";
import Profile from "../views/Profile";
import ProfileDetail from "../views/ProfileDetail";
import Setting from "../views/Settings";
import CustomHeader from "../components/customheader/CustomHeader";
import AddTransaction from "../views/AddTransaction";
import Category from "../views/Category.js";
import EditTransaction from "../views/EditTransaction";
import Overview from "../views/Overview";
import Chart from "../views/Chart";
import About from "../views/About";
import OnBoarding from "../views/Onboarding";

const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 0,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: COLOR.blue,
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
          } else if (route.name == "Chart") {
            iconName = focused ? "pie-chart" : "pie-chart";
            color = focused ? "black" : "grey";
          } else if (route.name == "Overview") {
            iconName = focused ? "file" : "file";
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
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chart" component={Chart} />
      <Tab.Screen
        name="AddTransaction"
        component={AddTransaction}
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
          tabBarButton: (props) => <CustomTabBarButton {...props} />
        }}
      />
      <Tab.Screen name="Overview" component={Overview} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <stack.Navigator
      initialRouteName="HomeStack">
      <stack.Screen
        component={HomeTabs}
        name="HomeTabs"
        options={{ headerShown: false, gestureEnabled: false }}
      />
      {/* <stack.Screen 
        component={AuthStack}
        name="AuthStack"
        options={{ headerShown: false }}
      /> */}
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
      <stack.Screen
        component={About}
        name="About"
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
        component={Category}
        name="Category"
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
        component={EditTransaction}
        name="EditTransaction"
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
  )
}

export const Initial = ({ isAppFirstLaunched }) => {
  const isToken = useSelector(state => state.token, shallowEqual);
  // useEffect(() => {
  //   console.log("test", isAppFirstLaunched);
  // }, [isAppFirstLaunched])
  return (
    <stack.Navigator>
      {isToken != null ?
        <stack.Group screenOptions={{ headerShown: false }}>
          <stack.Screen
            component={HomeStack}
            name="HomeStack"
          />
        </stack.Group>
        :
        <stack.Group screenOptions={{ headerShown: false }}>
          {isAppFirstLaunched && (
            <stack.Screen
              component={OnBoarding}
              name="OnBoarding"
              options={{ headerShown: false }}
            />)}
          <stack.Screen
            component={Login}
            name="Login"
          />
          <stack.Screen
            component={Signup}
            name="Signup"
          />
        </stack.Group>
      }
    </stack.Navigator>
  );
}

