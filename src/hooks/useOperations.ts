import { useEffect, useState } from "react";

import operationsMocks from "../mocks/operations";
import { iOperation } from "../interfaces/Drop";

export const useOperations = (): [
  Array<iOperation>,
  (id: string, time: number) => void
] => {
  const [operations, setOperations] =
    useState<Array<iOperation>>(operationsMocks);

  const deleteOperation = (id: string, time: number): void => {
    const newOperations = operations.filter(
      (operation: iOperation) => operation.id !== id
    );
    const recalculatedDrops = newOperations.map((operation: iOperation) => {
      return {
        ...operation,
        transitionDuration: operation.transitionDuration - time,
        position: {
          ...operation.position,
          y: (1000 / operation.transitionDuration) * time,
        },
      };
    });

    setOperations(recalculatedDrops);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setOperations([...operations, ...operationsMocks]);
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, [operations]);

  return [operations, deleteOperation];
};
