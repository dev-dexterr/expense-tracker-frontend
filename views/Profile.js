import React, { useEffect, useState} from "react";
import { View, ActivityIndicator, TouchableOpacity, BackHandler } from "react-native";
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
  UserImgBackground
} from "../components/ProfileStyles";
import { StatusBar } from "expo-status-bar";

//Icon
import { Feather } from "@expo/vector-icons";

//MenuData
import profileMenu from "../utils/constants/profileMenu.js";

import Option from "../components/option/Option.js"

//Lottie
import LottieView from 'lottie-react-native';
import LogoutModal from "../components/Modal/logout/logout";
import { useSelector } from "react-redux";

const Profile = ({ navigation }) => {
  const { username, email } = useSelector((state) => state);
  const [modalVisible, setModalVisible] = useState(false);
  

  const handleLogout = () => {
    setModalVisible(true)
  }

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <UserInfo>
          <UserImg source={require("../assets/avatar-circle.png")} />
          {/* <UserImgBackground>
            <LottieView style={{aspectRatio: 1, marginVertical: '-10%' }}
              source={require('../assets/icons/63065-profile-in-out.json')}
              autoPlay
            />
          </UserImgBackground> */}
          <UserName>{username}</UserName>
          <UserEmail>{email}</UserEmail>
          <Divider />
        </UserInfo>
        {profileMenu.map((data, index) => (
          <OptionTouch key={index} onPress={() => navigation.navigate(data.navigatorName)}>
            <Option name={data.name} iconName={data.iconName} />
          </OptionTouch>
        ))}
        <TouchableOpacity onPress={handleLogout}>
          <Option name="Logout" iconName="log-out" />
        </TouchableOpacity>
        <LogoutModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </InnerContainer>
    </StyledContainer>
  );
};

// const Options = ({ name, iconName }) => {
//   return (
//     <OptionItemWrapper>
//       <OptionLeftWrapper>
//         <View>
//           <OptionIconBackground>
//             <OptionIcon>
//               <Feather name={iconName} size={24} color="black" />
//             </OptionIcon>
//           </OptionIconBackground>
//         </View>
//         <View>
//           <OptionText>{name}</OptionText>
//         </View>
//       </OptionLeftWrapper>
//       <OptionRightWrapper>
//         <View>
//           <Feather name="chevron-right" size={24} color="black" />
//         </View>
//       </OptionRightWrapper>
//     </OptionItemWrapper>
//   );
// };

export default Profile;
