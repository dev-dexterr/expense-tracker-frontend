import styled from "styled-components/native";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import Constants from 'expo-constants';

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

export const HeaderItemWrapper = styled.View`
    padding: 15px 10px 5px 10px;
    flex-direction: row;
    justify-content: flex-start; 
    align-items: flex-start;
`

export const HeaderIconBackground = styled.View`
    background-color: ${quaternary}
    width: 50px;
    height: 50px;
    border-radius: 20px;
`
export const HeaderIcon = styled.View`
    align-items: center;
    top: 12px
`