import * as types from "../actions/types";
import jwt_decode from "jwt-decode"
import { useDispatch } from "react-redux";
import { logRoles } from "@testing-library/react";
import {logout} from "../actions/auth"

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: false,
  error: null,
  user: null,
  loading: false,
  id: null,
  form_name: null,
  date: null,
  show: false,
};




// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.REQUEST_START:
      return {
        error: null,
        loading: true,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case types.AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    case types.LOGIN_SUCCESS:
      localStorage.setItem("access", payload.access);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        access: payload.access,
        refresh: payload.refresh,
      };
    case types.USER_LOADED_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case types.LOGIN_FAIL:
    case types.SIGNUP_FAIL:
    case types.USER_LOADED_FAIL:
    case types.LOGOUT:
    case types.AUTHENTICATED_FAIL:
      return {
        ...state,
        loading: false,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null,
        error: action.error,
      };
    case types.SAVING_ID:
      return {
        ...state,
        show: payload.show,
        id: payload.id,
        formName: payload.form_name,
        date: payload.date,
      };
    default:
      return state;
  }
}
