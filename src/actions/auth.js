import axios from "axios";
import { REQUEST_URL } from "../constant/Constant";
import * as types from "../actions/types";

export const checkAuthenticated = () => async (dispatch) => {
  dispatch({
    type: types.REQUEST_START,
  });
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ token: localStorage.getItem("access") });
    try {
      const res = await axios.post(
        REQUEST_URL + `/auth/jwt/verify/`,
        body,
        config
      );
      if (res.data !== "token_not_valid") {
        dispatch({
          type: types.AUTHENTICATED_SUCCESS,
        });
        dispatch(load_user());
      } else {
        dispatch({
          type: types.AUTHENTICATED_FAIL,
        });
      }
    } catch {
      dispatch({
        type: types.AUTHENTICATED_FAIL,
      });
    }
  } else {
    dispatch({
      type: types.AUTHENTICATED_FAIL,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  dispatch({
    type: types.REQUEST_START,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(
      REQUEST_URL + `/auth/jwt/create/`,
      body,
      config
    );
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(load_user());
  } catch (error) {
    dispatch({
      error: error.response,
      type: types.LOGIN_FAIL,
    });
  }
};

export const signup =
  (name, email, password, re_password) => async (dispatch) => {
    dispatch({
      type: types.REQUEST_START,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ name, email, password, re_password });
    await axios
      .post(REQUEST_URL + `/auth/users/`, body, config)
      .then((res) => {
        dispatch(login(email, password));
        dispatch({
          type: types.SIGNUP_SUCCESS,
          payload: res.data,
        });
        dispatch(load_user());
      })
      .catch((error) => {
        dispatch({
          error: error.response,
          type: types.SIGNUP_FAIL,
        });
      });
  };

export const update_profile =
  (phone, address, state, postcode) => async (dispatch) => {
    dispatch({
      type: types.REQUEST_START,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ phone, address, state, postcode });
    try {
      const res = await axios.put(
        REQUEST_URL + `/api/user/update`,
        body,
        config
      );
      // if (res.data.username) {
      dispatch({
        type: types.UPDATE_USER_PROFILE_SUCCESS,
      });
      dispatch(load_user());
      // } else {
      // 	dispatch({
      // 		type: types.UPDATE_USER_PROFILE_FAIL,
      // 	});
      // }
    } catch (error) {
      dispatch({
        error: error.response,
        type: types.UPDATE_USER_PROFILE_FAIL,
      });
    }
  };

export const load_user = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(REQUEST_URL + `/api/user/profile`, config);
      dispatch({
        type: types.USER_LOADED_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        error: error.response,
        type: types.USER_LOADED_FAIL,
      });
    }
  } else {
    dispatch({
      type: types.USER_LOADED_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  localStorage.removeItem("expirationDate");
  dispatch({
    type: types.LOGOUT,
  });
};

export const savingId = (show, id, form_name, date) => (dispatch) => {
  dispatch({
    type: types.SAVING_ID,
    payload: { show, id, form_name, date },
  });
};
