import axios from "axios";

function signUp(body) {
  return axios.post(`${process.env.REACT_APP_API_BASE_URL}sign-up`, body);
}
function signIn(body) {
  return axios.post(`${process.env.REACT_APP_API_BASE_URL}sign-in`, body);
}
function getProducts() {
  return axios.get(`${process.env.REACT_APP_API_BASE_URL}products`);
}
export { signUp, signIn, getProducts };
