import config from "./serverConfig.js";
const BACKEND_BASE_URl_HOME = config.api_url_home;
const BACKEND_BASE_URl_OFFICE = config.api_url_office;

const BACKEND_API = {
  BASE_API_URL_HOME: `${BACKEND_BASE_URl_HOME}`,
  BASE_API_URL_OFFICE: `${BACKEND_BASE_URl_OFFICE}`,
  LOGIN: "/login",
  REGISTER: "/register",
  ADD_TRANSACTION: "/transaction/add",
  LIST_TRANSACTION: "/transaction/list",
  EDIT_Transaction: "/transaction/edit",
  DELETE_Transaction: "/transaction/delete/",
  GET_USERINFO: "/user/info",
  RESETPWD: "/user/resetpwd",
  EDIT_USER: "/user/edit",
  DELETE_USER: "/user/delete/"
};

export default BACKEND_API;
