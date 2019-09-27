import { CHAMAR_RESERVA } from "../types";

export default (state, action) => {
  switch (action.type) {
    case CHAMAR_RESERVA:
      return {
        ...state,
        reservaState: action.payload
      };
    default:
      return state;
  }
};
