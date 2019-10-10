import React, { Fragment } from "react";

const SpotItem = ({ spot }) => {
  const { spot_id, unidade, tipo, livre } = spot;

  return (
    <Fragment>
      <path
        className="spot"
        strokeWidth={0.5}
        stroke="#000"
        fill="#fff"
        d="M28.5 21.453h58v39h-58z"
      />
    </Fragment>
  );
};

export default SpotItem;
