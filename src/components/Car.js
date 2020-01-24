import React, { useState } from "react";

export default function Car() {
  const [started, setStarted] = useState(false);
  const [countKm, setCountKm] = useState(0);

  const checkStateCar = () => {
    if (started) {
      return <span style={{ color: "green" }}>Encendido</span>;
    } else {
      return <span style={{ color: "red" }}>Apagado</span>;
    }
  };
  const checkStateCarButton = () => {
    if (!started) {
      return "Ensender...";
    } else {
      return "Apagadar...";
    }
  };
  const increseKm = num => {
    if (started) {
      setCountKm(countKm + num);
    } else {
      alert("El auto esta apagado");
    }
  };
  return (
    <div>
      <h2>Nuesto Auto esta: {checkStateCar()}</h2>
      <h2>Kilometros recorridos: {countKm} Km</h2>
      <button
        onClick={() => {
          setStarted(!started);
        }}
      >
        {checkStateCarButton()}
      </button>

      <button onClick={() => increseKm(5)}>Incrementar Km</button>
    </div>
  );
}
