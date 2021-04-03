import { GET_PHOTOS, GET_SINGLE_PHOTO } from '../types';

const initialState = {
  photos: [],
  photo: {},
};

const photosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: payload,
      };
    case GET_SINGLE_PHOTO:
      return {
        ...state,
        photo: payload,
      };

    default:
      return state;
  }
};

export default photosReducer;
