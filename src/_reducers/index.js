import { combineReducers } from 'redux';

import { authentication } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  alert
});

export default rootReducer;