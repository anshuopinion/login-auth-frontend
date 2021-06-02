import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
});

export const login = async ({ email, password }) => {
  try {
    const { data } = await api.post("/user/signin", { email, password });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const signup = async ({ name, email, password }) => {
  try {
    const { data } = await api.post("/user/signup", { name, email, password });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
