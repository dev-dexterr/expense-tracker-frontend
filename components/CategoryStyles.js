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

export const ProfileDetailTitle = styled.Text`
    font-size: 32px;
    text-align: center;
    font-weight: bold;
    color: ${COLOR.secondary};
    padding: 10px 0px 70px 0px;
    fontFamily: 'Ubuntu-Bold'
`

export const IEListTextContainer = styled.View`
    margin-top: -25px;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 20px;
`

export const IEListText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${COLOR.senary};
    fontFamily: 'Ubuntu-Bold';
    padding-right: 25px;
    padding-left: 25px;
`;

export const IEContainerCategory = styled.View`
    
`

export const IEContainerWrapper = styled.View`
    padding: 10px 5px 10px 0px;
    flex-direction: row;
    justify-content: flex-start; 
    align-items: center;
`

export const IEIconBackground = styled.View`
    background-color: ${COLOR.quaternary};
    border-radius: 50px;
    padding: 15px;
`

export const IEIcon = styled.Image`
    width: 22px;
    height: 22px;
`

export const IEText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${COLOR.quinary};
    fontFamily: 'Roboto-Light';
    padding-right: 25px;
    padding-left: 25px;
`

export const Divider = styled.View`
    border-bottom-color: ${COLOR.septenary};
    border-bottom-width: 1px;
    border-radius: 50px;
    width: 100%
    margin-top: 0px;
`

export const Divider2 = styled.View`
    border-bottom-color: transparent;
    border-bottom-width: 1px;
    box-shadow: rgba(0, 0, 0, 0.1) 2px 2px 2.6px;
    border-radius: 50px;
    width: 100%
`

