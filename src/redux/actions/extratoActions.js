import * as apiExtrato from "../../api/apiExtrato";
import {extratoTypes} from "./actionsTypes";

export function get() {
  return async function(dispatch) {
    dispatch(loading(true));
    try {
      const response = await apiExtrato.getExtrato();
      if (response.data) {
        dispatch({
          type: extratoTypes.GET_EXTRATO,
          extratoData: response.data
        });
        dispatch(loading(false));
      }
    } catch (error) {
      const errorMessage = error.response.data.message;
      dispatch(
        getExtratoError(
          error.response.data.error,
          error.response.data.http_status,
          errorMessage
        )
      );
      dispatch(loading(false));
    }
  };
}

export function getExtratoError(errorStatus, errorHttpStatus, errorMessage) {
  return {
    type: extratoTypes.GET_EXTRATO_ERROR,
    error: {
      status: errorStatus,
      httpStatus: errorHttpStatus,
      message: errorMessage
    }
  };
}

export function loading(status) {
  return {
    type: extratoTypes.LOADING_EXTRATO,
    loading: status
  };
}
