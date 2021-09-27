import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  PageTitleName
} from "../components/HomeStyles";

//formik
import { Formik } from "formik";

//API Client
import axios from "axios";

//Icons
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation, username }) => {
  
  useEffect(()=>{
    console.log("asdasdas111", username);
  })
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>Hello,</PageTitle>
        <PageTitleName>{'Dexter'}</PageTitleName>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Home;
