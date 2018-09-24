import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user, refreshed: true, refreshing: false,cordssite: [[94,181,105,222,188,252,208,138],[217,133,196,258,377,118,350,72],[353,72,438,22,462,40,383,114]],  currentZone: null,
  currentRow: null } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.REFRESH_REQUEST:
      return {
        refreshing: true,
        refreshed: false
      };
    case userConstants.REFRESH_SUCCESS:
      return {
        refreshed: true,
        refreshing: false
      };
    case userConstants.REFRESH_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
      return { ...state, currentZone: action.payload}

      case 'setrow':
      return { ...state, currentRow: action.payload}
    default:
      return state
  }
