import React, { useEffect } from "react";
import { View, Platform, Text } from "react-native";
import {
  HeaderItemWrapper,
  HeaderIconBackground,
  HeaderIcon,
  HeaderTextView,
  HeaderText
} from "./HeaderStyles.js";
//Icon
import { Feather } from "@expo/vector-icons";

const CustomHeader = ({label}) => {
  return (
      <HeaderItemWrapper>
        <HeaderIconBackground>
          <HeaderIcon>
            <Feather name="chevron-left" size={24} color="black" />
          </HeaderIcon>
        </HeaderIconBackground>   
        <HeaderTextView>
          <HeaderText>{label}</HeaderText>  
        </HeaderTextView>     
      </HeaderItemWrapper>
  );
};

export default CustomHeader;
