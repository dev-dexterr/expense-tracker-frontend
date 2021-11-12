import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, TouchableWithoutFeedback } from "react-native";
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

import { useSelector } from "react-redux";

import { Formik } from "formik";

const PasswordChange = () => {
    const [hidePasswordOld, setHidePasswordOld] = useState(true);
    const [hidePasswordNew, setHidePasswordNew] = useState(true);
    const [hidePasswordConfirm, setHidePasswordConfirm] = useState(true);
    return (
        <StyledContainer>
            <InnerContainer>
                <ProfileDetailTitle>Password</ProfileDetailTitle>
                <Formik
                    initialValues={{ oldPassowrd: "", newPassword: "", confirmPassowrd: "" }}
                    onSubmit={(values, { setSubmitting }) => {
                        if (
                            values.newPassword == "" ||
                            values.confirmPassowrd == "" ||
                            values.oldPassowrd == "" || values == ""
                        ) {
                            console.log("Please Fill in the Fields");
                            setSubmitting(false);
                        } else {
                            console.log("updated Values", values);
                        }
                    }}
                >
                    {({ handleBlur, handleChange, handleSubmit, values, isSubmitting, }) => (
                        <SafeAreaView>
                            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                    <StyledFormArea>
                                        {/* Old Password */}
                                        <TextInput
                                            label="Old Password"
                                            placeholder="* * * * * * * * *"
                                            onChangeText={handleChange("oldPassword")}
                                            onBlur={handleBlur("oldPassword")}
                                            value={values.oldPassowrd}
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
                                            value={values.confirmPassowrd}
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
    )
}

export default PasswordChange;