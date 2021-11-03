import styled from "styled-components/native";
import COLOR from '../../utils/colors.js'

export const CardContainer = styled.View`
    background-color: ${COLOR.quaternary}
    height: 110px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.06) 2px 2px 2.6px;
    margin-top: 10px;
    margin-bottom: 8px;
    justify-content: center
`

export const MainContainer = styled.View`
    display: flex
    flex-direction: row
    justify-content: space-between
`

export const IEIconBackground = styled.View`
    padding-left: 25px
`

export const IEIcon = styled.Image`
    width: 30px;
    height: 30px;
`

export const IEAmountBackground = styled.View`
    justify-content: center
    padding-right: 25px
`
export const TransactionAmount = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${COLOR.secondary};
    fontFamily: 'Ubuntu-Bold';
`

export const TransactionNameView = styled.View`
    justify-content: center
`

export const TransactionText = styled.Text`
    font-size: 17px 
    fontFamily: 'Ubuntu-Bold';
`

export const BalanceText2 = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: ${COLOR.secondary};
    fontFamily: 'Ubuntu-Bold'
`

export const RemarkView = styled.View`
    width: 60%
    padding-left: 20px;
    top: 15px;
`

export const RemarkText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: ${COLOR.secondary};
    fontFamily: 'Roboto-Light';
`

export const DateView = styled.View`
    padding-right: 25px
    top: 15px;
`

export const DateText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: ${COLOR.secondary};
    fontFamily: 'Roboto-Light';
`

export const DetailContainer = styled.View`
    display: flex
    flex-direction: row
    justify-content: space-between
`