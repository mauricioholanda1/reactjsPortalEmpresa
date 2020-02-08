import {extratoTypes} from "../actions/actionsTypes";

const initialState = {
  extratoData: {
    docs: []
  }
};

export default function extratoReducer(state = initialState, action) {
  switch (action.type) {
    case extratoTypes.GET_EXTRATO:
      return {
        ...state,
        extratoData: action.extratoData
      };

    case extratoTypes.LOADING_EXTRATO:
      return {
        ...state,
        loading: action.loading
      };

    case extratoTypes.GET_USER_EXTRATO:
      return {...state, error: action.error};

    default:
      return state;
  }
}
