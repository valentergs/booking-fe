import React, { useState } from "react";

const SvgComponent = spot => {
  const [clickedA, setClickedA] = useState(false);
  const [clickedB, setClickedB] = useState(false);
  const [selecionado, setSelecionado] = useState(null);

  const toggleHoverA = () => {
    setClickedA(!clickedA);
  };

  const toggleHoverB = () => {
    setClickedB(!clickedB);
  };

  //   const onClick = e => {
  //     const nome = e.target.name;
  //     setSelecionado(...selecionado, nome);
  //   };

  const { nome } = spot;

  return (
    <div>
      <svg width={450} height={450}>
        <title>{"background"}</title>
        <path fill="#e5e5e5" d="M-1-1h452v452H-1z" />
        <g>
          <title>{"Layer 1"}</title>
          {clickedA ? (
            <path
              className="quadrado"
              name="quadrado"
              strokeWidth={0.5}
              stroke="#000"
              fill="red"
              d="M22.5 25.453h136v140h-136z"
              //   onClick={() => {
              //     toggleHoverA();
              //     console.warn("cliquei em quadrado");
              //     onClick(() => setSelecionado(nome));
              //   }}
            />
          ) : (
            <path
              className="quadrado"
              name="quadrado1"
              strokeWidth={0.5}
              stroke="#000"
              fill="green"
              d="M22.5 25.453h136v140h-136z"
              //   onClick={() => {
              //     toggleHoverA();
              //     onClick();
              //     console.warn("cliquei em quadrado");
              //   }}
            />
          )}
          {clickedB ? (
            <ellipse
              className="elipse"
              ry={38.5}
              rx={77}
              cy={292.953}
              cx={152.5}
              strokeWidth={0.5}
              stroke="#000"
              fill="red"
              onClick={() => {
                toggleHoverB();
                console.warn("passei elipse...");
              }}
              styles={{ color: "red" }}
            />
          ) : (
            <ellipse
              className="elipse"
              ry={38.5}
              rx={77}
              cy={292.953}
              cx={152.5}
              strokeWidth={0.5}
              stroke="#000"
              fill="green"
              onClick={() => {
                toggleHoverB();
                console.warn("passei elipse...");
              }}
              styles={{ color: "red" }}
            />
          )}

          <path
            className="triangulo"
            d="M255.907 195.069l77-141 77 141h-154z"
            fillOpacity="null"
            strokeOpacity="null"
            strokeWidth={1.5}
            stroke="#000"
            fill="#fff"
            onClick={() => {
              console.warn("passei triangulo...");
            }}
          />
        </g>
      </svg>
    </div>
  );
};

// const styles = {
//   triangulo: {
//     background: "red"
//   }
// };

export default SvgComponent;
