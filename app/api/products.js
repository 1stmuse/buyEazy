import { api } from "./";

export const getProducts = async () => {
  return await api.get("/products");
};
