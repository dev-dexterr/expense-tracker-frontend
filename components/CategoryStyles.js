import styled from "styled-components/native";
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight
//colors
export const colors = {
    primary: '#ffffff',
    secondary: '#000000',
    tertiary: '#E5E6E8',
    quaternary: '#F5F7FA',
    quinary: 'black',
    senary: 'grey'
}

const {primary , secondary , tertiary, quaternary, quinary, senary} = colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 20px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary}
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
    color: ${secondary};
    padding: 10px 0px 70px 0px;
    fontFamily: 'Ubuntu-Bold'
`

export const IEListTextContainer = styled.View`
    margin-top: -25px;
    flex-direction: row;
    justify-content: center;
    
`

export const IEListText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${senary};
    fontFamily: 'Ubuntu-Bold';
    padding-right: 25px;
    padding-left: 25px;
`;

