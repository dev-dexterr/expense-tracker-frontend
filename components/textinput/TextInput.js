import React from "react";
import { View } from "react-native";
import {StyledInputLabel , StyledTextInput, RightIcon} from "./TextInputStyles.js";

//Icons
import { Ionicons } from "@expo/vector-icons";

const TextInput = ({
    label,
    icon,
    isPassword,
    hidePassword,
    setHidePassword,
    ...props
  }) => {
    return (
      <View>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props} />
        {isPassword && (
          <RightIcon onPress={() => setHidePassword(!hidePassword)}>
            <Ionicons size={30} name={hidePassword ? "md-eye-off" : "md-eye"} />
          </RightIcon>
        )}
      </View>
    );
  };

  export default TextInput;