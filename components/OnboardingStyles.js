import styled from "styled-components/native";
import COLOR from '../utils/colors.js';
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const SlideSafeAreaView = styled.SafeAreaView`
    flex: 1;
    background-color: ${COLOR.primary}
`

export const SlideContainer = styled.View`
    align-items: center;
    justify-content: center; 
    flex: 1;
`
export const SlideTextContainer = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const SlideTitle = styled.Text`
    color: ${COLOR.secondary};
    font-weight: bold;
    font-size: 28px;
    fontFamily: 'Ubuntu-Bold'
    padding: 20px 20px 20px 20px;
    max-width: 90%;
    text-align: center;
    line-height: 35px;
`

export const SlideSubTitle = styled.Text`
    color: ${COLOR.secondary};
    fontFamily: 'Roboto-Light';
    font-size: 17px;
    padding: 10px 0px 20px 0px;
    max-width: 90%;
    text-align: center;
    line-height: 25px;
    height: 120px
`

export const FooterView = styled.View`
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    width: ${width * 0.125}px;
    align-self: center;
`

export const FooterContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const FooterIndicator = styled.View`
    height: 3px;
    width: 10px;
    border-radius: 10px;
    background-color: ${COLOR.darkgrey}
`

export const FooterButtoncontainer = styled.View`
    margin: 20px;
`

export const FooterButtonView = styled.View`
    flex-direction: row;
`

export const FooterButtonView2 = styled.View`
    height: 60px;
`

export const FooterBtn = styled.TouchableOpacity`
    flex: 1;
    height:60px;
    border-radius: 10px;
    align-items: center;
    justify-content: center; 
    background-color: ${COLOR.blue}
`

export const FooterBtnText = styled.Text`
    color: ${COLOR.primary};
    font-weight: bold;
    font-size: 16px;
    fontFamily: 'Ubuntu-Bold'
`
