import React, { useEffect, useContext, Fragment } from "react";
import ReservaContext from "../../Context/reserva/reservaContext";

const Spots = () => {
  const reservaCtx = useContext(ReservaContext);
  const { spotState, chamarSpot, selectSpot } = reservaCtx;

  useEffect(() => {
    chamarSpot();
  }, []);

  return (
    <Fragment>
      <svg width={"100%"} height={"100%"} viewBox="0 0 500 500">
        <title>{"mesa de trabalho"}</title>
        <path fill="#e5e5e5" d="M-1-1h452v452H-1z" stroke="" strokeWidth={0} />
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
    </Fragment>
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
