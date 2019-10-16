import React, { useContext, useState } from "react";
import ReservaContext from "../../Context/reserva/reservaContext";

const ReservaCriarForm = () => {
  const reservaContext = useContext(ReservaContext);
  const {} = reservaContext;

  //   useEffect(() => {
  //     setReserva({
  //       usuario: "",
  //       spot: ""
  //     });
  //   }, [reservaContext, current]);

  const [] = useState({
    usuario: "",
    spot: ""
  });

  //   const { usuario, spot } = reserva;

  return (
    <div>
      <form method="post">
        <div className="form-group form-inline">
          <input
            type="text"
            className="form-control mr-2"
            placeholder="Usuário"
            // name="usuario"
            // value={usuario}
          />
          <input
            type="text"
            className="form-control  mr-2"
            placeholder="Unidade"
            // name="usuario"
            // value={usuario}
          />
          <input
            type="text"
            className="form-control  mr-2"
            placeholder="Tipo de Spot"
            // name="spot"
            // value={spot}
          />
          <input
            type="submit"
            value="Criar Reserva"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default ReservaCriarForm;
