import styled from "styled-components";
import COLOR from '../../utils/colors.js';

export const StyledTextInput = styled.TextInput`
    background-color: ${COLOR.quaternary};
    padding: 15px;
    border-radius: 8px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    color: ${COLOR.quinary};
    fontFamily: 'Roboto-Light'
    width: 60%
`

export const RightIcon = styled.TouchableOpacity`
    right: 170px;
    top: 15px;
    position: absolute;
    z-index: 1;
`

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
    height: 35%
    width: 90%
`

export const StyledButton = styled.TouchableOpacity`
    padding: 0px;
    background-color: ${COLOR.blue};
    justify-content: center;
    border-radius: 10px;
    margin-vertical: 5px;
    height: 45px;
`;

export const StyledButtonText = styled.Text`
    color: ${COLOR.primary};
    font-size: 16px;
    text-align: center;
    font-weight: bold;
    fontFamily: 'Ubuntu-Bold'
    width: 110px
`

export const ModalBackgroundButton = styled.View`
    background-color: ${COLOR.primary};
    border-radius: 25px;
    left: 162px;
    top: 8px
`

export const SearchContainer = styled.View`
    flex-direction: row
`

export const RightIcon2 = styled.View`
    align-items: center
    justify-content: center;
    margin-left: 70px
`