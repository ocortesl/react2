import React, { useState, useEffect } from "react";

const Index = () => {
  const [variable1, setVariable1] = useState("Soy un estado");
  const [valorInput, setValorInput] = useState("");

  useEffect(() => {
    console.log("Cambi variable 1 y el valor es", variable1);
  }, [variable1]);

  return (
    <div>
      <div className="fondo-vede">
        <span>El valor de la variable es: </span>
        {variable1}
      </div>
      <input
        value={valorInput}
        onChange={(e) => {
          setValorInput(e.target.value);
        }}
        type="text"
        placeholder="Ingrese el nuevo valor"
      />
      <button
        onClick={() => {
          setVariable1(valorInput);
        }}
      >
        Haz click acá
      </button>
    </div>
  );
};

export default Index;
