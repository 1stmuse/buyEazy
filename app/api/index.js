import apisauce from "apisauce";
import storage from "@react-native-async-storage/async-storage";
const url = "127.0.0.1://";
// const token = storage.getItem("token");
export const api = apisauce.create({
  baseURL: "http://192.168.122.1:8081/api/v1",
  headers: {
    "Content-Type": "application/json",
    // authorization: token,
  },
});
