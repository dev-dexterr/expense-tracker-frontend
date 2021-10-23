import AsyncStorage from '@react-native-async-storage/async-storage';
const Token = "Token"

export const getterToken = async () => {
    const value = await AsyncStorage.getItem(Token);
    return value;
}

export const setterToken = async (value) => {
    try{
        await AsyncStorage.setItem(Token, value)
    }catch(e){
        console.log(e);
    }
}