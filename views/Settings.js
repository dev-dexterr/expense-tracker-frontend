import React from "react";
import {TouchableOpacity,View} from "react-native";
import {
    StyledContainer,
    InnerContainer,
    OptionTouch,
    SettingTitle,
    SettingSubTitle
} from "../components/ProfileStyles.js";
import settingMenu from "../utils/constants/settingMenu.js";
import CustomHeader from "../components/customheader/CustomHeader";
import Option from "../components/option/Option.js";

const Setting = ({navigation}) => {
    return(
        <StyledContainer>
            <InnerContainer>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CustomHeader label="Settings"/>
                </TouchableOpacity>
                {settingMenu.map((data,index1) => (
                    <OptionTouch key={index1}>
                        <SettingTitle>{data.titleName}</SettingTitle>
                        <SettingSubTitle>{data.subTitle}</SettingSubTitle>
                        {data.item.map((item,index2)=>(
                            <OptionTouch key={index2} onPress={()=> navigation.navigate(item.navigatorName)}>
                                <Option name={item.name} iconName={item.iconName}/>
                            </OptionTouch>
                        ))}
                    </OptionTouch>
                ))}
            </InnerContainer>
        </StyledContainer>
    )
}

export default Setting;