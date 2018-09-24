import { combineReducers } from 'redux';

import { authentication } from './users.reducer';
import { alert } from './alert.reducer';
import { overView } from './overView.reducer';

const rootReducer = combineReducers({
  authentication,
  alert,
});

