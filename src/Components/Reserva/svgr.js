import React from "react";

const SvgComponent = props => (
  <svg width={450} height={450} {...props}>
    <title>{"background"}</title>
    <path fill="#f2f2f2" d="M-1-1h452v452H-1z" />
    <g className="spot">
      <title>{"Layer 1"}</title>
      <path
        className="spot"
        strokeWidth={0.5}
        stroke="#000"
        fill="#fff"
        d="M28.5 21.453h58v39h-58z"
      />
      <path
        strokeWidth={0.5}
        stroke="#000"
        fill="#fff"
        d="M28.5 71.453h58v39h-58z"
      />
      <path
        strokeWidth={0.5}
        stroke="#000"
        fill="aqua"
        d="M28.5 121.453h58v39h-58z"
      />
    </g>
  </svg>
);

export default SvgComponent;
