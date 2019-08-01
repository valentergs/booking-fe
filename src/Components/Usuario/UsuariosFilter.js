import React, { useContext, useRef, useEffect } from "react";
import VAContext from "../../Context/vacaamarela/vaContext";

const UsuariosFilter = () => {
  const vaContext = useContext(VAContext);
  const text = useRef("");
  const { filterUsuario, clearFilter, filtered } = vaContext;

  const onChange = e => {
    if (text.current.value !== "") {
      filterUsuario(e.target.value);
    } else {
      clearFilter();
    }
  };

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  return (
    <form className="w-auto">
      <input
        type="text"
        ref={text}
        placeholder="Filtrar usuarios..."
        onChange={onChange}
        style={{ width: "300px", marginTop: "15px" }}
        className="rounded d-block"
      />
    </form>
  );
};

export default UsuariosFilter;
