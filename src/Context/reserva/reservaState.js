import React, { useReducer } from "react";
import axios from "axios";
import ReservaContext from "./reservaContext";
import ReservaReducer from "./reservaReducer";
import {
  CHAMAR_RESERVA,
  SELECT_SPOT,
  CLEAR_SELECT_SPOT,
  CHAMAR_SPOT
} from "../types";

const ReservaState = props => {
  const initialState = {
    reservaState: [],
    spotState: [],
    selecionado: null
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

  // Chmar Spots
  const chamarSpot = async () => {
    const res = await axios.get("http://localhost:8080/spot");
    dispatch({
      type: CHAMAR_SPOT,
      payload: res.data
    });
  };

  // Selecionar Spot
  const selectSpot = spot => {
    dispatch({ type: SELECT_SPOT, payload: spot });
  };

  // Limpar Selecionar Spot
  const clearSelectSpot = () => {
    dispatch({ type: CLEAR_SELECT_SPOT });
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
        spotState: state.spotState,
        selecionado: state.selecionado,
        chamarReserva,
        chamarSpot,
        selectSpot,
        clearSelectSpot
      }}
    >
      {props.children}
    </ReservaContext.Provider>
  );
};

export default ReservaState;
