import { combineReducers } from 'redux';

import { authentication } from './users.reducer';
import { alert } from './alert.reducer';
import { overView } from './overView.reducer';
import {simpleReducer} from './simpleReducer';

const rootReducer = combineReducers({
  authentication,
  alert,
  overView,
simpleReducer
});

export default rootReducer;
