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
    height: 52%
    width: 90%
`

export const ModalIconContainer = styled.View`
    padding: 0px 15px 15px 15px
`

export const ModalContentContainer = styled.View`
    padding: 15px 25px 25px 25px
    height: 40%
    width: 100%
`


export const IEIconBackgroundModal = styled.View`
    background-color: ${COLOR.quaternary};
    border-radius: 50px;
    padding: 25px;
`

export const IEIconModal = styled.Image`
    width: 40px;
    height: 40px;
`

export const ModalBackgroundButton = styled.View`
    background-color: ${COLOR.quaternary};
    padding: 2px;
    border-radius: 25px;
    left: 162px;
    top: 8px
`

export const ModalBackgroundButton2 = styled.View`
    padding: 2px;
    border-radius: 25px;
`


export const TitleText = styled.Text`
    font-size: 32px 
    fontFamily: 'Roboto-Light';
    padding-bottom: 5px
    letter-spacing: 1px;
`

export const AmountText = styled.Text`
    font-size: 42px 
    fontFamily: 'Ubuntu-Bold';
    padding: 0px 10px 10px 10px
    
`

export const ModalItemWrapper = styled.View`
    padding: 5px 0px 5px 0px
    flex-direction: row;
    justify-content: flex-start; 
    align-content: flex-start;

    
`
export const ModalLeftWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    width: 45%
    
`

export const ModalRightWrapper = styled.View`
    align-items: flex-start;  
    width: 55% 
`

export const ContentText = styled.Text`
    font-size: 14px 
    fontFamily: 'Ubuntu-Bold';
    padding: 2px
    align-self: flex-start
`

export const DynamicContentText = styled.Text`
    font-size: 14px;
    fontFamily: 'Roboto-Light';
    padding: 2px;
`

export const BalanceText2 = styled.Text`
    font-weight: bold;
    font-size: 18px;
    color: ${COLOR.primary};
    fontFamily: 'Ubuntu-Bold'
` 