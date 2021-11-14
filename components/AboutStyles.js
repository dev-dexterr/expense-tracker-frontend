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
    width: 150px;
    height: 150px;
    border-radius: 50px;
`

export const UserInfo = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center
`

export const Title = styled.Text`
    font-size: 24px;
    padding: 25px;
    color: ${COLOR.secondary};
    fontFamily: 'Roboto-Light'
` 

export const ProfileDetailTitle = styled.Text`
    font-size: 32px;
    text-align: center;
    font-weight: bold;
    color: ${COLOR.secondary};
    padding: 10px 0px 70px 0px;
    fontFamily: 'Ubuntu-Bold'
`