import * as types from '../actions/types';


const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    error: null,
    user: null,
    loading: false,
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case types.REQUEST_START:
            return {
                error: null,
                loading: true
            }
        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                error: null
            }
        case types.AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loading:false
            }
        case types.LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access)
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                access: payload.access,
                refresh: payload.refresh
            }
        case types.USER_LOADED_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload
            }
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
            }
        default:
            return state
    }
}