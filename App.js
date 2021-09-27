import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Views
import Login from './views/Login';
import Signup from './views/Signup';
import Home from './views/Home';

const stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

function HomeTabs({route}){
  const { username } = route.params;
  useEffect(()=>{
    console.log("asdasdas", username);
  })
  return(
    <tab.Navigator>
      <tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
    </tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen component={Login} name="Login" options={{headerShown:false}}/>
        <stack.Screen component={Signup} name="Signup" options={{headerShown:false}}/>
        <stack.Screen component={HomeTabs} name="HomeTabs" options={{headerShown:false}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}




