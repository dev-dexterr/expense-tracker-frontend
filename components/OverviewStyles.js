import styled from "styled-components/native";
import Constants from 'expo-constants';
import COLOR from '../utils/colors.js';

const StatusBarHeight = Constants.statusBarHeight

export const StyledContainer = styled.View`
    flex: 1;
    padding: 20px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${COLOR.primary}
    padding-bottom: 120px;
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
`

export const IEListTextContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-top: 15px
    padding-right: 50px;
    padding-left: 50px;
`

export const IEListText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${COLOR.senary};
    fontFamily: 'Ubuntu-Bold' 
`;

export const TransactionContainer = styled.View`
    height: 87%;
    margin-top: 8%;
    width: 100%
    border-radius: 20px;
`

export const NoTransactionView = styled.View`
    align-items: center;
    justify-content: center; 
    flex: 1;
    margin-top: 15%;
`

export const OverviewItemWrapper = styled.View`
    padding: 5px 0px 5px 0px
    flex-direction: row;
    justify-content: flex-start; 
    align-content: flex-start; 
`
export const OverviewLeftWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    
`

export const OverviewRightWrapper = styled.View`
    align-items: flex-start;  
`