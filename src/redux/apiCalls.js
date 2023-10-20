import { loginStart, loginSucces, loginFailure } from "./userSlice";
import { publicRequest } from "../config/requestMethods";

const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post("/api/auth/login", user);
    dispatch(loginSucces(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export default login;