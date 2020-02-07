// import * as apiUser from '../../api/apiUser';
// import { userTypes } from './actionsTypes';

// export function get() {
//   return async function (dispatch) {
//     dispatch(loading(true));
//     try {
//       const response = await apiUser.usuario();
//       if (response.data) {
//         dispatch({
//           type: userTypes.GET_USER,
//           userData: response.data.user,
//         });
//         dispatch(loading(false));
//       }
//     } catch (error) {
//       const errorMessage = error.response.data.message;
//       dispatch(
//         getUserError(error.response.data.error, error.response.data.http_status, errorMessage)
//       );
//       dispatch(loading(false));
//     }
//   };
// }

// export function getUserError(errorStatus, errorHttpStatus, errorMessage) {
//   return {
//     type: userTypes.GET_USER_ERROR,
//     error: { status: errorStatus, httpStatus: errorHttpStatus, message: errorMessage }
//   };
// }

// export function loading(status) {
//   return {
//     type: userTypes.LOADING_USER,
//     loading: status
//   };
// }
