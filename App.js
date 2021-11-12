import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Store } from "./utils/redux/store";
import { ActivityIndicator, Text, View } from "react-native";
import { Initial } from "./navigation/tab.js"
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { getterToken } from "./utils/auth.js";
import { setToken, setID, setEmail, setUsername } from "./utils/redux/actions";
import { getUserInfo } from "./api/generalAPI.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setuserToken] = useState(null);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isAppFirstLaunched, setisAppFirstLaunched] = useState(null);

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
    setFontLoaded(true);
  }

  useEffect(() => {
    //AsyncStorage.clear();
    setTimeout(async () => {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      if (appData == null) {
        setisAppFirstLaunched(true)
        AsyncStorage.setItem('isAppFirstLaunched','false');
      } else {
        setisAppFirstLaunched(false)
      }

      const token = await getterToken();
      if (token != null) {
        setuserToken(token);
        Store.dispatch(setToken(token));
        getUserInfo().then((res) => {
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
  }, [userToken]);

  const Loading = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  return (
    isAppFirstLaunched != null && (
      <>
        {fontLoaded ? (
          <Provider store={Store}>
            <NavigationContainer>
              <Initial isAppFirstLaunched={isAppFirstLaunched}/>
            </NavigationContainer>
          </Provider>
        ) : (
          <Loading />
        )}
      </>)
  );
}
