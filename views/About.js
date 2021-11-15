import React from "react";
import {TouchableOpacity} from "react-native";
import {
  StyledContainer,
  InnerContainer,
  UserImg,
  UserInfo,
  Title,
  ProfileDetailTitle,
} from "../components/AboutStyles.js";
import CustomHeader from "../components/customheader/CustomHeader";

const About = ({navigation}) => {
  return (
    <StyledContainer>
      <InnerContainer>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CustomHeader label="About" />
        </TouchableOpacity>
        <UserInfo>
          <UserImg source={require("../assets/icons/Icon.png")} />
          <Title>v1.0.0</Title>
        </UserInfo>
      </InnerContainer>
    </StyledContainer>
  );
};

export default About;
