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

export function editTransaction(data){
    return request({
        url: api.EDIT_Transaction,
        method: "post",
        data: data
    })
}

export function deleteTransaction(id){
    return request({
        url: api.DELETE_Transaction + `${id}`,
        method: "delete"
    })
}

export function deleteUser(id){
    return request({
        url: api.DELETE_USER + `${id}`,
        method: "delete"
    })
}

export function getUserInfo(){
    return request({
        url: api.GET_USERINFO,
        method: "get"
    })
}

export function resetPwd(data){
    return request({
        url: api.RESETPWD,
        method: "post",
        data: data
    })
}

export function editUser(data){
    return request({
        url: api.EDIT_USER,
        method: "post",
        data: data
    })
}