import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, TouchableWithoutFeedback,ActivityIndicator } from "react-native";
import {
  StyledContainer,
  InnerContainer,
  ProfileDetailTitle,
  StyledFormArea,
  StyledButton,
  StyledButtonText,
} from "../components/ProfileStyles";

//Text Input
import TextInput from "../components/textinput/TextInput.js";

import { useNavigation } from "@react-navigation/native";

import SuccessModal from "../components/Modal/Success/success.js";

import { editUser } from "../api/generalAPI";
import { meta } from "../utils/enum.js";
//Redux
import { shallowEqual, useSelector } from "react-redux";

import { Formik } from "formik";
import { Store } from "../utils/redux/store";
import { setEmail,setUsername } from "../utils/redux/actions";

const ProfileDetail = () => {
  const { username, email } = useSelector((state) => state, shallowEqual);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const user_id = useSelector((state) => state.userId, shallowEqual);

  const handlePassChange = () => {
    navigation.navigate('PasswordChange');
  }

  const handleEdit = async (credentials, setSubmitting) => {
    await editUser(credentials).then((res)=> {
        if(res.meta == meta.OK){
          Store.dispatch(setEmail(credentials.email));
          Store.dispatch(setUsername(credentials.username));
          setModalVisible(true);
          setTimeout(() => {
            setSubmitting(false);
            setModalVisible(false);
          }, 2000);
        }
    })
    .catch((err) => {
      setSubmitting(false);
      console.log(err);
    });
  }

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <ProfileDetailTitle>Edit Profile</ProfileDetailTitle>
        <SuccessModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <Formik
          initialValues={{ username: username, email: email }}
          onSubmit={(values, { setSubmitting , resetForm }) => {
            if (values.username == "" ||  values.email == "") {
              console.log("Please Fill in the Fields");
              setSubmitting(false);
            }else if(values.username == username && values.email == email){
              console.log("SAME");
            }else {
              values.userprofile = user_id;
              handleEdit(values, setSubmitting)
            }
          }}
        >
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            isSubmitting,
          }) => (
            <SafeAreaView>
              <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <StyledFormArea>
                    <TextInput
                      label="username"
                      placeholder="name"
                      onChangeText={handleChange("username")}
                      onBlur={handleBlur("username")}
                      value={values.username}
                    />
                    <TextInput
                      label="Email Address"
                      placeholder="name@example.com"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      keyboardType="email-address"
                    />
                    {!isSubmitting && (
                      <>
                        <StyledButton onPress={handleSubmit}>
                          <StyledButtonText>Save</StyledButtonText>
                        </StyledButton>
                        <StyledButton onPress={handlePassChange}>
                          <StyledButtonText>Change Password</StyledButtonText>
                        </StyledButton>
                      </>
                    )}
                    {isSubmitting && (
                      <StyledButton disabled={true}>
                        <ActivityIndicator size="small" color="#FFFFFF" />
                      </StyledButton>
                    )}
                  </StyledFormArea>
                </TouchableWithoutFeedback>
              </KeyboardAvoidingView>
            </SafeAreaView>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

export default ProfileDetail;
