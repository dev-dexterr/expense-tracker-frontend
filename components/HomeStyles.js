import styled from "styled-components";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
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

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: left;
    font-weight: bold;
    color: ${secondary};
    padding: 10px;
    margin-bottom: -20px;
    letter-spacing: 1.5px;
    fontFamily: 'Roboto-Regular'
`
export const PageTitleName = styled.Text`
    font-size: 40px;
    text-align: left;
    color: ${secondary};
    padding: 10px;
    margin-bottom: 10px;
    letter-spacing: 1px;
    font-weight: bold
`

export const SubTitle = styled.Text`
    font-size: 16px;
    margin-bottom: 120px;
    letter-spacing: 1.5px;
    font-weight: bold;
    color: ${secondary};
`

export const BalanceBackground = styled.View`
    background-color: ${quaternary}
    height: 130px;
    border-radius: 20px;
`
export const BalanceText = styled.Text`
    font-weight: bold;
    font-size: 40px;
    color: ${quinary};
    text-align: center;
    top: 60px;
    left: 60px;
` 
export const BalanceText2 = styled.Text`
    font-weight: bold;
    font-size: 18px;
    color: ${senary};
    fontFamily: 'Roboto-Regular';
` 
export const BalanceText3 = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: ${senary};
    text-align: center;
    right: 90px
    top: -25px
` 
export const BalanceText4 = styled.Text`
    font-size: 15px;
    color: ${senary};
    text-align: center;
    right: 130px
    top: 5px
    font-weight: bold;
` 

