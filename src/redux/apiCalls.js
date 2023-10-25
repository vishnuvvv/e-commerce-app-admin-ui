import { loginStart, loginSucces, loginFailure } from "./userSlice";
import { publicRequest } from "../config/requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
} from "./productSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post("/api/auth/login", user);
    dispatch(loginSucces(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("api/products/get-all-products");
    dispatch(getProductSuccess(res.data));
  } catch (error) {
    dispatch(getProductFailure());
  }
};
