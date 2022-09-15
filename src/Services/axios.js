import axios from "axios";

function signUp(body) {
  return axios.post(`${process.env.REACT_APP_API_BASE_URL}sign-up`, body);
}
export { signUp };
