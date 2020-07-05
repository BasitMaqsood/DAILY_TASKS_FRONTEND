import jwtDecode from "jwt-decode";
import http from "./httpService";

const apiEndpoint = "/user/login";
const tokenKey = "x-auth-token";

export async function login(loginObj) {
  const response = await http.post(apiEndpoint, loginObj);
  const {
    data: { token },
  } = response;
  await localStorage.setItem(tokenKey, token);
  return response;
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch {
    return null;
  }
}

export async function getJwt() {
  return await localStorage.getItem(tokenKey);
}

export async function getAllusers() {
  return await http.get("/user");
}

export async function getCurrentInfo() {
  const currentUser = getCurrentUser();
  return currentUser;
}

export function getUserInfo() {
  return http.get("/user/profile", {
    headers: { "x-auth-token": localStorage.getItem("x-auth-token") },
  });
}

export default {
  login,
  logout,
  loginWithJwt,
  getCurrentUser,
  getJwt,
};
