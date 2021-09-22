import { useEffect, useState } from "react";

import styled from "styled-components";
import { useOperations } from "../../hooks/useOperations";
import { iOperation } from "../../interfaces/Drop";
import Drop from "../Drop/Drop";

export const Street = styled.div`
  background: black;
  width: 100%;
  height: 100vh;
`;

const Main = () => {
  const [operations, deleteOperation] = useOperations();

  return (
    <Street>
      {operations.map((operation: iOperation, i: number) => (
        <Drop key={i} drop={operation} deleteOperation={deleteOperation} />
      ))}
    </Street>
  );
};
export default Main;
