import styled from "styled-components";
import COLOR from '../../utils/colors.js';

export const StyledInputLabel = styled.Text`
    color: ${COLOR.quinary};
    font-size: 16px;
    text-align: left;
    letter-spacing: 1.5px;
    margin-bottom: 10px;
    font-weight: bold;
    fontFamily: 'Ubuntu-Bold'
`

export const StyledTextInput = styled.TextInput`
    background-color: ${COLOR.quaternary};
    padding: 15px;
    padding-left: 22px;
    padding-right: 22px;
    border-radius: 8px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 50px;
    color: ${COLOR.quinary};
    fontFamily: 'Roboto-Light'
`

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 45px;
    position: absolute;
    z-index: 1;
`