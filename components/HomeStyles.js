import styled from "styled-components/native";
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
    fontFamily: 'Roboto-Light'
`
export const PageTitleName = styled.Text`
    font-size: 40px;
    text-align: left;
    color: ${secondary};
    padding: 10px;
    margin-bottom: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    fontFamily: 'Ubuntu-Bold'
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
    box-shadow: rgba(0, 0, 0, 0.06) 2px 2px 2.6px;
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
export const IEContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 25px;
    justify-content: space-between;
`

export const IEBackground = styled.View`
    background-color: ${quaternary}
    height: 100px;
    border-radius: 20px;
    width: 47%;
    box-shadow: rgba(0, 0, 0, 0.06) 2px 2px 2.6px;
`
export const IEText1 = styled.Text`
    text-align: center; 
    top: 15px;
    font-weight: bold;
    font-size: 35px;
    padding: 1px;
`
export const IEText2 = styled.Text`
    text-align: center; 
    top: 15px;
    font-weight: bold;
    font-size: 15px;
    color: ${senary};
`

export const IEListTextContainer = styled.View`
    margin-top: -15px;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 5px;
    padding-left: 5px;
`

export const IEListText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${senary};
`



