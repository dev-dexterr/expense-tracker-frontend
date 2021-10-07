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
export const TransactionView = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center
    margin-top: 25px;
` 
export const TransactionTitle = styled.Text`
    font-size: 34px;
    font-weight: bold;
    color: ${secondary};
    padding-bottom: 35px;
    fontFamily: 'Ubuntu-Bold'
`   

export const TransactionBackground = styled.View`
    background-color: ${quaternary}
    height: 130px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.06) 2px 2px 2.6px;
`

export const TransactionDollar = styled.Text`
    font-weight: bold;
    font-size: 38px;
    color: ${senary};
    fontFamily: 'Ubuntu-Bold'
`

export const TransactionDollarView = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center
    margin-top: 45px;
` 