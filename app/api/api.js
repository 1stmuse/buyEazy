import { api } from ".";
import storage from "@react-native-async-storage/async-storage";

export const login = async (data) => {
  const result = await api.post("/users/auth", data);
  return result;
};

export const register = async (data) => {
  const result = await api.post("/users", data);
  return result;
};

export const getUser = async () => {
  const token = await storage.getItem("token");
  api.setHeaders({
    authorization: `bearer ${token}`,
  });
  const result = await api.get("/users");
  return result;
};

export const getAllCategory = async () => {
  return await api.get("/categories");
};

export const getProducts = async () => {
  return await api.get("/products");
};

export const getAddress = async () => {
  const token = await storage.getItem("token");
  api.setHeaders({
    authorization: `bearer ${token}`,
  });
  const result = await api.get("/address");
  return result;
};
