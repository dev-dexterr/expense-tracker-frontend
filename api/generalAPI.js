import request from "../utils/request.js";

export function login(data){
    return request({
        url: "/login",
        method: "post",
        data: data
    })
};

//there are many waYS to get the same result
// export const login = (data) => request({
//     url: "/login",
//     method: "post",
//     data: data
// });