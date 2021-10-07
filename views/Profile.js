import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import {
  StyledContainer,
  InnerContainer,
  UserImg,
  UserInfo,
  UserName,
  UserEmail,
  Divider,
  OptionTouch,
  OptionItemWrapper,
  OptionLeftWrapper,
  OptionRightWrapper,
  OptionText,
  OptionIconBackground,
  OptionIcon,
} from "../components/ProfileStyles";
import { StatusBar } from "expo-status-bar";

//Icon
import { Feather } from "@expo/vector-icons";

//MenuData
import profileMenu from "../utils/constants/profileMenu.js";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setEmail, setToken } from "../utils/redux/actions.js";

const Profile = ({ navigation }) => {
  const { username, email } = useSelector((state) => state.userReducer);
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <UserInfo>
          <UserImg source={require("../assets/default-user-image.png")} />
          <UserName>{username}</UserName>
          <UserEmail>{email}</UserEmail>
          <Divider />
        </UserInfo>
        {profileMenu.map((data, index) => (
          <OptionTouch key={index} onPress={() => navigation.navigate(data.navigatorName)}>
            <Options  name={data.name} iconName={data.iconName} />
          </OptionTouch>
        ))}
      </InnerContainer>
    </StyledContainer>
  );
};

const Options = ({ name, iconName }) => {
  return (
    <OptionItemWrapper>
      <OptionLeftWrapper>
        <View>
          <OptionIconBackground>
            <OptionIcon>
              <Feather name={iconName} size={24} color="black" />
            </OptionIcon>
          </OptionIconBackground>
        </View>
        <View>
          <OptionText>{name}</OptionText>
        </View>
      </OptionLeftWrapper>
      <OptionRightWrapper>
        <View>
          <Feather name="chevron-right" size={24} color="black" />
        </View>
      </OptionRightWrapper>
    </OptionItemWrapper>
  );
};

export default Profile;
