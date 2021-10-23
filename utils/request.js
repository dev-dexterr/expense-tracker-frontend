import axios from "axios";
import serverConfig from "./serverConfig";
import { meta } from "./enum.js";
import { Alert } from "react-native";
//Redux
import { useSelector } from "react-redux";

const service = axios.create({
  baseURL: serverConfig.api_url_home,
  timeout: 15000,
});

service.interceptors.request.use(
  (config) => {
    const { token } = useSelector((state) => state.token);
    if (token) {
    }

    config.headers["Authorization"] = token;
    config.headers["Content-Type"] = "application/json";

    if (config.method === "post") {
      config.data = JSON.stringify(config.data);
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;

    if (res.meta == meta.TOKENEXPIRE) {
      Alert.alert("Alert", "Token Expired", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed!"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed!"),
        },
      ]);
    } else {
      return res;
    }
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);

export default service;
