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
function deleteSession(config) {
  return axios.delete(`${process.env.REACT_APP_API_BASE_URL}session`, config);
}
function finalizePurchase(body, config) {
  return axios.post(
    `${process.env.REACT_APP_API_BASE_URL}store-sales`,
    body,
    config
  );
}
export { signUp, signIn, getProducts, deleteSession, finalizePurchase };
