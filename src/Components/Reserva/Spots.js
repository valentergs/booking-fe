import React from "react";
import PropTypes from "prop-types";

const styleConfig = {
  path: {}
};

const Figures = props => (
  <svg width={450} height={450}>
    <title>{"background"}</title>
    <path fill="#f2f2f2" d="M-1-1h452v452H-1z" />
    <g>
      <title>{"Layer 1"}</title>
      {spotState.map(spot => (
        <div key={spot.spot_id}>
          <SpotItem
            spot={spot}
            className={`${props.className}`}
            style={styleConfig.path}
            strokeWidth={`${props.strokeWidth}`}
          />
        </div>
      ))}
    </g>
  </svg>
);

Figures.propTypes = {
  figure: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number.isRequired
};

Figures.defaultTypes = {
  fill: "aqua",
  strokeWidth: 0.5
};
