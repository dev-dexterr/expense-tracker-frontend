import React, { useEffect, useState } from "react";
import {TouchableOpacity} from "react-native";
import {StyledContainer,InnerContainer,UserImg,UserInfo,UserName,UserEmail,Divider,OptionTouch } from "../components/ProfileStyles";
import { StatusBar } from "expo-status-bar";

//MenuData
import profileMenu from "../utils/constants/profileMenu.js";

import Option from "../components/option/Option.js";

import LogoutModal from "../components/Modal/logout/logout";
import { useSelector } from "react-redux";

const Profile = ({ navigation }) => {
  const { username, email } = useSelector((state) => state);
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    setModalVisible(true);
  };

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <UserInfo>
          <UserImg source={require("../assets/avatar-circle.png")} />
          <UserName>{username}</UserName>
          <UserEmail>{email}</UserEmail>
          <Divider />
        </UserInfo>
        {profileMenu.map((data, index) => (
          <OptionTouch
            key={index}
            onPress={() => navigation.navigate(data.navigatorName)}
          >
            <Option name={data.name} iconName={data.iconName} />
          </OptionTouch>
        ))}
        <TouchableOpacity onPress={handleLogout}>
          <Option name="Logout" iconName="log-out" />
        </TouchableOpacity>
        <LogoutModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </InnerContainer>
    </StyledContainer>
  );
};

export default Profile;
