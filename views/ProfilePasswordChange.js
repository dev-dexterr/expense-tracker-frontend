import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import {
  StyledContainer,
  InnerContainer,
  ProfileDetailTitle,
  StyledFormArea,
  StyledButton,
  StyledButtonText,
} from "../components/ProfileStyles";

import { meta } from "../utils/enum.js";

//Text Input
import TextInput from "../components/textinput/TextInput.js";

import SuccessModal from "../components/Modal/Success/success.js";

import { shallowEqual, useSelector } from "react-redux";

import { Formik } from "formik";
import CustomHeader from "../components/customheader/CustomHeader";
import { resetPwd } from "../api/generalAPI";

const PasswordChange = ({ navigation }) => {
  const [hidePasswordOld, setHidePasswordOld] = useState(true);
  const [hidePasswordNew, setHidePasswordNew] = useState(true);
  const [hidePasswordConfirm, setHidePasswordConfirm] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const user_id = useSelector((state) => state.userId, shallowEqual);

  const handleReset = async (credentials, setSubmitting) => {
    await resetPwd(credentials)
      .then((res) => {
        if (res.meta == meta.OK) {
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
  };
  return (
    <StyledContainer>
      <InnerContainer>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CustomHeader label="Edit Password" />
        </TouchableOpacity>
        {/* <ProfileDetailTitle>Edit Password</ProfileDetailTitle> */}
        <SuccessModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <Formik
          initialValues={{
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
            userprofile: "",
          }}
          onSubmit={(values, { setSubmitting, resetForm }, actions) => {
            if (
              values.newPassword == "" ||
              values.confirmPassword == "" ||
              values.oldPassword == "" ||
              values == ""
            ) {
              console.log("Please Fill in the Fields");
              setSubmitting(false);
            } else if (values.newPassword != values.confirmPassword) {
              console.log("Password and Confirm Password is not Match");
              setSubmitting(false);
            } else {
              values.userprofile = user_id;
              handleReset(values, setSubmitting);
              setTimeout(() => {
                resetForm({ values: "" });
              }, 3000);
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
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <StyledFormArea>
                    {/* Old Password */}
                    <TextInput
                      label="Old Password"
                      placeholder="* * * * * * * * *"
                      onChangeText={handleChange("oldPassword")}
                      onBlur={handleBlur("oldPassword")}
                      value={values.oldPassword}
                      secureTextEntry={hidePasswordOld}
                      isPassword={true}
                      hidePassword={hidePasswordOld}
                      setHidePassword={setHidePasswordOld}
                    />
                    {/* new Password */}
                    <TextInput
                      label="New Password"
                      placeholder="* * * * * * * * *"
                      onChangeText={handleChange("newPassword")}
                      onBlur={handleBlur("newPassword")}
                      value={values.newPassword}
                      secureTextEntry={hidePasswordNew}
                      isPassword={true}
                      hidePassword={hidePasswordNew}
                      setHidePassword={setHidePasswordNew}
                    />
                    {/* Old Password */}
                    <TextInput
                      label="Confirm Password"
                      placeholder="* * * * * * * * *"
                      onChangeText={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                      value={values.confirmPassword}
                      secureTextEntry={hidePasswordConfirm}
                      isPassword={true}
                      hidePassword={hidePasswordConfirm}
                      setHidePassword={setHidePasswordConfirm}
                    />
                    {!isSubmitting && (
                      <StyledButton onPress={handleSubmit}>
                        <StyledButtonText>Save</StyledButtonText>
                      </StyledButton>
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

export default PasswordChange;
