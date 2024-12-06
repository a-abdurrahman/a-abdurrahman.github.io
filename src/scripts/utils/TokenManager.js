import { jwtDecode } from "jwt-decode";
import CONFIG from "../globals/config";
import authentications from "../data/authentications";
const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");
function setTokens({accessToken, refreshToken}) {
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem("refreshToken", refreshToken)
}

export { accessToken, refreshToken, setTokens };
