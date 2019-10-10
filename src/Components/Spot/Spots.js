import React, { useEffect, useContext } from "react";
import ReservaContext from "../../Context/reserva/reservaContext";

const Spots = () => {
  const reservaCtx = useContext(ReservaContext);
  const { spotState, chamarSpot } = reservaCtx;

  useEffect(() => {
    chamarSpot();
  }, []);

  return (
    <div>
      <svg width={450} height={450}>
        <title>{"background"}</title>
        <path
          fill="#e5e5e5"
          d="M-1-1h452v452H-1z"
          stroke="#000"
          strokeWidth={1.5}
        />
        {spotState.map(lugar =>
          lugar.livre === true ? (
            <rect
              strokeWidth={0.5}
              className="livre"
              stroke="#000"
              fill="#04B45F"
              height={lugar.height}
              width={lugar.width}
              y={lugar.y}
              x={lugar.x}
              key={lugar.spot_id}
              unidade={lugar.unidade}
              transform={lugar.transform}
            />
          ) : (
            <rect
              className="ocupado"
              strokeWidth={0.5}
              stroke="#000"
              fill="#FF0000"
              height={lugar.height}
              width={lugar.width}
              y={lugar.y}
              x={lugar.x}
              key={lugar.spot_id}
              unidade={lugar.unidade}
              transform={lugar.transform}
            />
          )
        )}
      </svg>
    </div>
  );
};

export default Spots;

//const lugares = [
//   {
//     spot_id: 1,
//     unidade: "Agua Fria",
//     tipo: "Mesa",
//     livre: true,
//     height: "52.999931",
//     width: "24.999964",
//     y: "45.226808",
//     x: "416.25004",
//     transform: null
//   },
//   {
//     spot_id: 2,
//     unidade: "Agua Fria",
//     tipo: "Mesa",
//     livre: false,
//     height: "52.999931",
//     width: "24.999964",
//     y: "164.226647",
//     x: "11.750578",
//     transform: null
//   },
//   {
//     spot_id: 3,
//     unidade: "Imirim",
//     tipo: "Mesa",
//     livre: true,
//     height: "52.999931",
//     width: "24.999964",
//     y: "401.976346",
//     x: "182.500379",
//     transform: "rotate(90 195.00036621093747,428.47631835937506)"
//   }
// ];
