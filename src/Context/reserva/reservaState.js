import React, { useReducer } from "react";
import axios from "axios";
import ReservaContext from "./reservaContext";
import ReservaReducer from "./reservaReducer";
import { CHAMAR_RESERVA } from "../types";

const ReservaState = props => {
  const initialState = {
    reservaState: []
  };

  const [state, dispatch] = useReducer(ReservaReducer, initialState);

  // Chamar Reservas
  const chamarReserva = async () => {
    const res = await axios.get("http://localhost:8080/reserva");
    dispatch({
      type: CHAMAR_RESERVA,
      payload: res.data
    });
  };

  // Apagar Reservas

  // Adicionar Reservas

  // Marcar Reserva

  // Desmarcar Reserva

  // Atualizar Reserva

  // Filtrar Reserva

  // Limpar Reserva

  return (
    <ReservaContext.Provider
      value={{
        reservaState: state.reservaState,
        chamarReserva
      }}
    >
      {props.children}
    </ReservaContext.Provider>
  );
};

export default ReservaState;
