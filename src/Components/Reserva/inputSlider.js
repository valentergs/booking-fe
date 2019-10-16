import React, { useState } from "react";
import InputRange from "react-input-range";

const InputSlider = () => {
  const [state, setState] = useState({ value: { min: 15, max: 16 } });
  return (
    <div>
      <div className="form">
        <InputRange
          maxValue={19}
          minValue={9}
          //step={0.5}
          value={state.value}
          onChange={value => setState({ value })}
        />
      </div>
    </div>
  );
};

export default InputSlider;
