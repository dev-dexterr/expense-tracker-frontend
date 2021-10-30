import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Store } from "./utils/redux/store";
import { ActivityIndicator, Text, View } from "react-native";
import Tabs from "./navigation/tab";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { getterToken } from "./utils/auth.js";
import Login from "./views/Login";
import { setToken } from "./utils/redux/actions";

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setuserToken] = useState(null)
  const [fontLoaded, setFontLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
      "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
      "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
      "Ubuntu-Bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
      "Ubuntu-Light": require("./assets/fonts/Ubuntu-Light.ttf"),
      "Ubuntu-Regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
    });
    // setTimeout(() => {
    //   setFontLoaded(true);
    // }, 5000);
    setFontLoaded(true);
  }

  useEffect(() => {
    setTimeout(async () => {
      
      // getterToken().then((res)=> {
      //   const token = res
      //   setuserToken(token);
      //   console.log(`token`, token)
      // })
      const token = await getterToken();
        setuserToken(token);
        Store.dispatch(setToken(token));
        console.log(`token`, token)
        setIsLoading(false);
        loadFonts();
    },3000);

    // loadFonts();

  }, [userToken]);

  // if(isLoading){
  //   return(
  //     <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   )
  // }

  const Loading = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <>
      {fontLoaded ? (
        <Provider store={Store}>
          {userToken != null ? (
            <NavigationContainer>
              <Tabs />
            </NavigationContainer>
          ): <Login/>
          }
        </Provider>
      ) : <Loading/>}
    </>
  );
}
