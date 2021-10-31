import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Store } from "./utils/redux/store";
import { ActivityIndicator, Text, View } from "react-native";
import Tabs from "./navigation/tab";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { getterToken } from "./utils/auth.js";
import { setToken , setID, setEmail, setUsername } from "./utils/redux/actions";
import { getUserInfo } from "./api/generalAPI.js";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setuserToken] = useState(null);
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
      if(token != null){
        setuserToken(token);
        Store.dispatch(setToken(token));
        getUserInfo().then((res)=> {
          const user_id = res.user_info.login
          const username = res.user_info.username
          const email = res.user_info.email
          Store.dispatch(setID(user_id))
          Store.dispatch(setEmail(email))
          Store.dispatch(setUsername(username))
        }).catch(err => console.log(err))
        setIsLoading(false);
      }
      loadFonts();
    }, 3000);

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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  return (
    <>
      {fontLoaded ? (
        <Provider store={Store}>
          <NavigationContainer>
            {userToken != null ? (
              <Tabs />
            ) : 
              <Tabs/>
            }
          </NavigationContainer>
        </Provider>
      ) : (
        <Loading />
      )}
    </>
    // <>
    //   {fontLoaded ? (
    //     <Provider store={Store}>
    //       {userToken != null ? (
    //         <NavigationContainer>
    //           <Tabs />
    //         </NavigationContainer>
    //       ) : (
    //          <RootStackScreen/>
    //       )}
    //     </Provider>
    //   ) : (
    //     <Loading />
    //   )}
    // </>
  );
}
