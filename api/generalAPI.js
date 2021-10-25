import request from "../utils/request.js";
import api from "../utils/api.js";

export function login(data){
    return request({
        url: api.LOGIN,
        method: "post",
        data: data
    })
};

export function register(data){
    return request({
        url:api.REGISTER,
        method: "post",
        data: data
    })
}

export function addTransaction(data){
    return request({
        url: api.ADD_TRANSACTION,
        method: "post",
        data:data
    })
}

export function listTransaction(data){
    return request({
        url: api.LIST_TRANSACTION,
        method: "post",
        data:data
    })
}