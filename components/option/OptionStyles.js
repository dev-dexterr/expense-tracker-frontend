import styled from "styled-components/native";
import COLOR from '../../utils/colors.js';

export const OptionTouch = styled.TouchableOpacity`
`

export const OptionItemWrapper = styled.View`
    padding: 15px 10px 5px 10px;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
`
export const OptionLeftWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`

export const OptionRightWrapper = styled.View`
    align-items: flex-end;    
`

export const OptionText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${COLOR.secondary};
    fontFamily: 'Ubuntu-Bold';
    margin-left: 25px;
`

export const OptionIconBackground = styled.View`
    background-color: ${COLOR.quaternary}
    width: 50px;
    height: 50px;
    border-radius: 20px;
`
export const OptionIcon = styled.View`
    align-items: center;
    top: 12px
`