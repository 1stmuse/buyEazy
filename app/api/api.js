import { api } from ".";
import storage from "@react-native-async-storage/async-storage";

export const login = async (data) => {
  return await api.post("/users/auth", data);
};

export const register = async (data) => {
  return await api.post("/users", data);
};

export const getUser = async () => {
  const token = await storage.getItem("token");
  api.setHeaders({
    authorization: `bearer ${token}`,
  });
  return await api.get("/users");
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
  return await api.get("/address");
};

export const addAddress = async (data) => {
  const token = await storage.getItem("token");
  api.setHeaders({
    authorization: `bearer ${token}`,
  });

  return await api.post("/address", data);
};
