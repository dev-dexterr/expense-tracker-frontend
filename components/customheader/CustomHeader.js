import React, { useEffect } from "react";
import { View } from "react-native";
import {
  HeaderItemWrapper,
  HeaderIconBackground,
  HeaderIcon,
} from "./HeaderStyles.js";
//Icon
import { Feather } from "@expo/vector-icons";

const CustomHeader = () => {
  return (
      <HeaderItemWrapper>
        <HeaderIconBackground>
          <HeaderIcon>
            <Feather name="chevron-left" size={24} color="black" />
          </HeaderIcon>
        </HeaderIconBackground>        
      </HeaderItemWrapper>
  );
};

export default CustomHeader;
