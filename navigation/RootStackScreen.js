import React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from '../views/Login';
import Signup from '../views/Signup';

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator>
        <RootStack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <RootStack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
    </RootStack.Navigator>
);

export default RootStackScreen;