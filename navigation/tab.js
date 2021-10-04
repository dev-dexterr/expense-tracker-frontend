import React from 'react';
import { Text, TouchableOpacity, View, Image, Animated } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import plus from '../assets/plus.png';

//Font Awesome Icons
import { Feather } from '@expo/vector-icons';

// Views
import Login from '../views/Login';
import Signup from '../views/Signup';
import Home from '../views/Home';

const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused, color }) => {
                    let iconName;

                    if (route.name == 'Home') {
                        iconName = focused ? 'home' : 'home'
                        color = focused ? 'black' : 'grey'
                    } else if (route.name == 'testscreen1') {
                        iconName = focused ? 'bar-chart-2' : 'bar-chart-2'
                        color = focused ? 'black' : 'grey'
                    } else if (route.name == 'testscreen2') {
                        iconName = focused ? 'trending-up' : 'trending-up'
                        color = focused ? 'black' : 'grey'
                    } else if (route.name == 'testscreen3') {
                        iconName = focused ? 'settings' : 'settings'
                        color = focused ? 'black' : 'grey'
                    }

                    return <Feather name={iconName} size={25} color={color} />
                },
                tabBarIconStyle: {
                    top: 15
                },
                tabBarStyle: {
                    //FLoating Tab Bar
                    position: 'absolute',
                    bottom: 35,
                    marginHorizontal: 20,
                    backgroundColor: '#F5F7FA',
                    //Max Height
                    height: 60,
                    borderRadius: 15,
                    //Shadow
                    shadowColor: '#000',
                    shadowOpacity: 0.06,
                    shadowOffset: {
                        width: 10,
                        height: 10
                    }
                }
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="testscreen1" component={testscreen1} />
            <Tab.Screen name="testadd" component={testadd} options={{
                tabBarIcon: ({ focused }) => {
                    return (<TouchableOpacity>
                        <View style={{
                            width: 60,
                            height: 60,
                            backgroundColor: 'black',
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 25
                        }}>
                            <Image source={plus} style={{
                                width: 25,
                                height: 25,
                                tintColor: 'white'
                            }}></Image>
                        </View>
                    </TouchableOpacity>)

                }
            }} />
            <Tab.Screen name="testscreen2" component={testscreen2} />
            <Tab.Screen name="testscreen3" component={testscreen3} />
        </Tab.Navigator>
    )
}

export default function App() {
    return (
        <stack.Navigator>
            <stack.Screen component={Login} name="Login" options={{ headerShown: false }} />
            <stack.Screen component={Signup} name="Signup" options={{ headerShown: false }} />
            <stack.Screen component={HomeTabs} name="HomeTabs" options={{ headerShown: false }} />
        </stack.Navigator>
    );
}


//Test screen
function testscreen1() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', }}>
            <Text>testscreen1</Text>
        </View>
    )
}

function testadd() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', }}>
            <Text>testadd</Text>
        </View>
    )
}

function testscreen2() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', }}>
            <Text>testscreen2</Text>
        </View>
    )
}

function testscreen3() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', }}>
            <Text>testscreen3</Text>
        </View>
    )
}


