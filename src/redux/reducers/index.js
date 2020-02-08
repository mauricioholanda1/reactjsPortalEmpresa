import { combineReducers } from 'redux';
import extratoReducer from './extratoReducer';
import listaReducer from './listaReducer';

export default combineReducers({
  lista: listaReducer,
  extrato: extratoReducer,
});
