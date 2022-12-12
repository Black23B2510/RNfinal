import {GET_COUNTRIES} from '../action/action';

const initialState = {
  countries: [],
};
function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {...state, countries: action.payload};
    default:
      return state;
  }
}

export default userReducer;
