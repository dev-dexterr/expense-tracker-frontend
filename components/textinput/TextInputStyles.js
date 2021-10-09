import styled from "styled-components";

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

export const StyledInputLabel = styled.Text`
    color: ${quinary};
    font-size: 16px;
    text-align: left;
    letter-spacing: 1.5px;
    margin-bottom: 10px;
    font-weight: bold;
    fontFamily: 'Ubuntu-Bold'
`

export const StyledTextInput = styled.TextInput`
    background-color: ${quaternary};
    padding: 15px;
    padding-left: 22px;
    padding-right: 22px;
    border-radius: 8px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 50px;
    color: ${quinary};
    fontFamily: 'Roboto-Light'
`

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 45px;
    position: absolute;
    z-index: 1;
`