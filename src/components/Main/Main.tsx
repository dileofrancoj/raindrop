import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Drop from "../Drop/Drop";
import { iOperation } from "../../interfaces/Drop";
import { useGame } from "../../contexts/GameContext";

export const Street = styled.div`
  background: black;
  width: 85%;
  height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const Board = styled.div`
  width: 15%;
  padding: 24px;
`;

const Main = () => {
  const { operations, calculateOperation, score } = useGame();
  const [result, setResult] = useState<string>("");

  const handleOperation = (e) => {
    if (e.key === "Enter") {
      if (Number(e.target.value)) {
        calculateOperation(+e.target.value);
        setResult("");
      }
    }
  };
  return (
    <Container>
      <Street>
        {operations.map((operation: iOperation, i: number) => (
          <Drop key={i} drop={operation} />
        ))}
      </Street>
      <Board>
        <h3>Tablero </h3>
        <input
          type="text"
          name="operation"
          onKeyDown={handleOperation}
          placeholder="operacion"
          value={result}
          onChange={(e) => setResult(e.target.value)}
        />
        <h4>Score: {score}</h4>
      </Board>
    </Container>
  );
};
export default Main;
