/* eslint-disable prettier/prettier */
// store.js
import {createStore} from 'redux';

import dataReducer from './Reducers.js';

const store = createStore(dataReducer);

export default store;
