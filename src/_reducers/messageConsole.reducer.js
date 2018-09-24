import { messageConsoleConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  requesting: false,
  messages: user ? user.messages : null,
  loaded: false
}

export function messageConsole(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (action.type) {
    case messageConsoleConstants.GET_MESSAGES_REQUEST:
      return {
        ...state,
        requesting: true,
        loaded: false
      };
    case messageConsoleConstants.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        requesting: false,  
        messages: action.messages,
        loaded: true
      };
    case messageConsoleConstants.GET_MESSAGES_FAILURE:
      return {
        ...state,
        requesting: false,
        error: action.error,
        loaded: false
      };
    default:
      return state
  }
}