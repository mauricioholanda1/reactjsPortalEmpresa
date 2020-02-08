import {listaTypes} from "../actions/actionsTypes";

const initialState = {
  listaData: {
    docs: []
  }
};
export default function listaReducer(state = initialState, action) {
  switch (action.type) {
    case listaTypes.GET_LISTA:
      return {
        ...state,
        listaData: action.listaData
      };

    case listaTypes.LOADING_LISTA:
      return {
        ...state,
        loading: action.loading
      };

    case listaTypes.GET_LISTA_ERROR:
      return {...state, error: action.error};

    default:
      return state;
  }
}
