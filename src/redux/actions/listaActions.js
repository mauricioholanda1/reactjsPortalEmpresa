import * as apiLista from "../../api/apiLista";
import {listaTypes} from "./actionsTypes";

export function get() {
  return async function(dispatch) {
    dispatch(loading(true));
    try {
      const response = await apiLista.getLista();
      console.log("getLista", response  );
      if (response.data) {
        dispatch({
          type: listaTypes.GET_LISTA,
          listaData: response.data
        });
        dispatch(loading(false));
      }
    } catch (error) {
      const errorMessage = error.response.data.message;
      dispatch(
        getListaError(
          error.response.data.error,
          error.response.data.http_status,
          errorMessage
        )
      );
      dispatch(loading(false));
    }
  };
}

export function getListaError(errorStatus, errorHttpStatus, errorMessage) {
  return {
    type: listaTypes.GET_LISTA_ERROR,
    error: {
      status: errorStatus,
      httpStatus: errorHttpStatus,
      message: errorMessage
    }
  };
}

export function loading(status) {
  return {
    type: listaTypes.LOADING_LISTA,
    loading: status
  };
}
