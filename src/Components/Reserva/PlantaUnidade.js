import React from "react";
import planta from "../../assets/images/plantaA.svg";

const PlantaUnidade = () => {
  return (
    <div>
      <img src={planta} alt="planta" />
    </div>
  );
};

const styles = {
  caixa: {
    height: "450px",
    width: "450px",
    background: "#f3f3f3"
  },
  row: {
    border: "solid black 1px"
  },
  column: {
    border: "solid black 1px"
  }
};
export default PlantaUnidade;
