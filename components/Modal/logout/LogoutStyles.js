import styled from "styled-components/native";
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
border-radius: 15px;
align-items: center;
elevation: 5
box-shadow: rgba(0, 0, 0, 0.06) 2px 2px 2.6px;
height: 20%
width: 70%
justify-content: center;
`

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${props => props.logout ? COLOR.expense : COLOR.blue};
    justify-content: center;
    border-radius: 10px;
    margin-vertical: 10px;
    height: 50px;
`;

export const StyledButtonText = styled.Text`
    color: ${COLOR.primary};
    font-size: 16px;
    text-align: center;
    font-weight: bold;
    fontFamily: 'Ubuntu-Bold'
    width: 200px
`