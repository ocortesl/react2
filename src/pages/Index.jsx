import React, { useState, useEffect } from "react";

const Index = () => {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [suma, setSuma] = useState(0);

  useEffect(() => {
    console.log("Valor1", valor1, "Valor2", valor2);
    setSuma(valor1 + valor2);
  }, [valor1, valor2]);

  return (
    <div>
      <input
        value={valor1}
        onChange={(e) => setValor1(parseInt(e.target.value))}
        placeholder="Valor 1"
        type="number"
      />
      <input
        value={valor2}
        onChange={(e) => setValor2(parseInt(e.target.value))}
        placeholder="Valor 2"
        type="number"
      />
      <span>la suma de los valores 1 y 2 es {suma}</span>
    </div>
  );
};

export default Index;
