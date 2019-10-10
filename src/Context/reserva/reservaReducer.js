import {
  CHAMAR_RESERVA,
  SELECT_SPOT,
  CLEAR_SELECT_SPOT,
  CHAMAR_SPOT
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case CHAMAR_RESERVA:
      return {
        ...state,
        reservaState: action.payload
      };
    case SELECT_SPOT:
      return {
        ...state,
        selecionado: action.payload
      };
    case CLEAR_SELECT_SPOT:
      return {
        ...state,
        selecionado: null
      };
    case CHAMAR_SPOT:
      return {
        ...state,
        spotState: action.payload
      };
    default:
      return state;
  }
};
