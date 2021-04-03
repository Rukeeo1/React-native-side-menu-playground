import { LOADING, FETCHING_MORE } from '../types';
const initialState = {
  isLoading: false,
  isRefreshing: false,
  fetchingMore: false,
  isCompleted: false,
};

const loadingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    // case REFRESHING:
    //   return {
    //     ...state,
    //     isRefreshing: payload,
    //   }
    case FETCHING_MORE:
      return {
        ...state,
        fetchingMore: payload,
      };
    // case COMPLETED:
    //   return {
    //     ...state,
    //     isCompleted: payload
    //   }
    default:
      return state;
  }
};

export default loadingReducer;
