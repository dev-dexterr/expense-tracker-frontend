import styled from "styled-components/native";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import Constants from 'expo-constants';
import COLOR from '../../utils/colors.js';

export const HeaderItemWrapper = styled.View`
    padding: 15px 10px 5px 10px;
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