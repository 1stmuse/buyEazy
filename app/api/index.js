import apisauce from "apisauce";
const url = "127.0.0.1://"
export const api = apisauce.create({
    baseURL: "http://192.168.122.1:8080/api/v1",
    headers: {
        "Content-Type": "application/json",
    }
})