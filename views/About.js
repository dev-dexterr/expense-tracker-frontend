import React from "react";
import {StyledContainer,InnerContainer, UserImg, UserInfo, Title,ProfileDetailTitle} from "../components/AboutStyles.js";

const About = () => {
    return(
        <StyledContainer>
            <InnerContainer>
                <ProfileDetailTitle>About</ProfileDetailTitle>
                <UserInfo>
                    <UserImg source={require("../assets/icons/Icon.png")}/>
                    <Title>v1.0.0</Title>
                </UserInfo>
            </InnerContainer>
        </StyledContainer>
    )
}

export default About;
