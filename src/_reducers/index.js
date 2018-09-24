import { combineReducers } from 'redux';

import { authentication } from './users.reducer';
import { alert } from './alert.reducer';
import { overView } from './overView.reducer';
import { messageConsole } from './messageConsole.reducer';

const rootReducer = combineReducers({
  authentication,
  alert,
  overView,
  messageConsole
});

export default rootReducer;