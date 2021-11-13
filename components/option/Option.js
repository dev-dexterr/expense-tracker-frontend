import React from "react";
import { OptionItemWrapper, OptionLeftWrapper, OptionRightWrapper, OptionText, OptionIconBackground, OptionIcon, } from "./OptionStyles.js";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

const Option = ({ name, iconName }) => {
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

export default Option;