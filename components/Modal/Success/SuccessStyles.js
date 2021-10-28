import styled from "styled-components/native";
import Constants from 'expo-constants';
import COLOR from '../../../utils/colors.js';

export const CenteredModalView = styled.View`
    align-items: center;
    justify-content: center; 
    flex: 1; 
    background-color: rgba(0,0,0,.5);
    color: #fff;
`

export const ModalView = styled.View`
    background-color: ${COLOR.primary};
    border-radius: 25px;
    align-items: center;
    elevation: 5
    box-shadow: rgba(0, 0, 0, 0.06) 2px 2px 2.6px;
    height: 25%
    width: 55%
    justify-content: center;
`