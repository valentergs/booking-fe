import React, { useEffect, useContext } from "react";
import ReservaContext from "../../Context/reserva/reservaContext";

const Spots = () => {
  const reservaCtx = useContext(ReservaContext);
  const { spotState, chamarSpot, selectSpot } = reservaCtx;

  useEffect(() => {
    chamarSpot();
  }, []);

  return (
    <div style={styles}>
      <svg width={450} height={450}>
        <title>{"mesa de trabalho"}</title>
        <path
          fill="#e5e5e5"
          d="M-1-1h452v452H-1z"
          stroke="#000"
          strokeWidth={1.5}
        />
        {spotState.map(lugar =>
          lugar.bloqueado === true ? (
            <rect
              strokeWidth={0}
              className="livre"
              stroke="#000"
              fill="#6E6E6E"
              height={lugar.height}
              width={lugar.width}
              y={lugar.y}
              x={lugar.x}
              key={lugar.spot_id}
              unidade={lugar.unidade}
              transform={lugar.transform}
              onClick={() => selectSpot(lugar)}
              style={styles.mouseOff}
            />
          ) : lugar.livre === true ? (
            <rect
              strokeWidth={0}
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
              onClick={() => selectSpot(lugar)}
              style={styles.mouseOff}
            />
          ) : (
            <rect
              className="ocupado"
              strokeWidth={0}
              stroke="#000"
              fill="#FF0000"
              height={lugar.height}
              width={lugar.width}
              y={lugar.y}
              x={lugar.x}
              key={lugar.spot_id}
              unidade={lugar.unidade}
              transform={lugar.transform}
              onClick={() => selectSpot(lugar)}
              style={styles.mouseOff}
            />
          )
        )}
      </svg>
    </div>
  );
};

const styles = {
  mouseOver: {
    opacity: "1"
  },
  mouseOff: {
    opacity: "0.5"
  }
};

export default Spots;
