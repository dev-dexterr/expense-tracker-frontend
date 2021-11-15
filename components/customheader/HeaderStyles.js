import styled from "styled-components/native";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import Constants from 'expo-constants';
import COLOR from '../../utils/colors.js';

export const HeaderItemWrapper = styled.View`
    padding: 5px 10px 5px 10px;
    flex-direction: row;
    justify-content: flex-start; 
    align-items: flex-start;
`

export const HeaderIconBackground = styled.View`
    background-color: ${COLOR.quaternary}
    width: 50px;
    height: 50px;
    border-radius: 20px;
`
export const HeaderIcon = styled.View`
    align-items: center;
    top: 12px
`

export const HeaderTextView = styled.View`
    justify-content: center
    padding: 5px 0px 0px 10px
`

export const HeaderText = styled.Text`
    font-size: 32px;
    text-align: center;
    font-weight: bold;
    color: ${COLOR.secondary};
    padding: 0px 0px 50px 0px;
    fontFamily: 'Ubuntu-Bold'
`