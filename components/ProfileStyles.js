import styled from "styled-components/native";
import Constants from 'expo-constants';
import COLOR from '../utils/colors.js';

const StatusBarHeight = Constants.statusBarHeight

export const StyledContainer = styled.View`
    flex: 1;
    padding: 20px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${COLOR.primary}
    padding-bottom: 120px;
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
`

export const UserImg = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
`

export const UserImgBackground = styled.View`
    border-radius: 50px;
    width: 100px;
    height: 100px;
    background-color: ${COLOR.quaternary}
`

export const UserInfo = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center
    margin-top: 25px;
`

export const UserName = styled.Text`
    font-size: 42px;
    font-weight: bold;
    color: ${COLOR.secondary};
    padding-top: 15px;
    padding-bottom: 15px;
    fontFamily: 'Ubuntu-Bold'
`   
export const UserEmail = styled.Text`
    font-size: 26px;
    font-weight: bold;
    color: ${COLOR.secondary};
    padding: 0px 0px 20px 0px
    fontFamily: 'Roboto-Light'
`   
export const Divider = styled.View`
    border-bottom-color: ${COLOR.quaternary};
    border-bottom-width: 1px;
    box-shadow: rgba(0, 0, 0, 0.06) 2px 2px 2.6px;
    border-radius: 50px;
    width: 80%
`

export const OptionTouch = styled.TouchableOpacity`
`

export const OptionItemWrapper = styled.View`
    padding: 15px 10px 5px 10px;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
`
export const OptionLeftWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`

export const OptionRightWrapper = styled.View`
    align-items: flex-end;    
`

export const OptionText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${COLOR.secondary};
    fontFamily: 'Ubuntu-Bold';
    margin-left: 25px;
`

export const OptionIconBackground = styled.View`
    background-color: ${COLOR.quaternary}
    width: 50px;
    height: 50px;
    border-radius: 20px;
`
export const OptionIcon = styled.View`
    align-items: center;
    top: 12px
`

export const ProfileDetailTitle = styled.Text`
    font-size: 32px;
    text-align: center;
    font-weight: bold;
    color: ${COLOR.secondary};
    padding: 10px 0px 70px 0px;
    fontFamily: 'Ubuntu-Bold'
`

export const StyledFormArea = styled.View`
    width: 100%;
`

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${COLOR.blue};
    justify-content: center;
    border-radius: 10px;
    margin-vertical: 20px;
    height: 60px;
`;

export const StyledButtonText = styled.Text`
    color: ${COLOR.primary};
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    fontFamily: 'Ubuntu-Bold'
`
