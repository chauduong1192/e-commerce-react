import {
  GET_CATEGORIES,
} from './types';

const initialState = {};

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CATEGORIES:
        return [
          ...state,
          ...action.categories
        ];

      default:
        return state;
    }
  };
  
  export default categoriesReducer;