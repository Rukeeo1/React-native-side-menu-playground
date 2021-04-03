import { combineReducers } from 'redux';

import photos from './photosReducer'
import loading from './loadingReducer'

export default combineReducers({
  photos,
  loading
});