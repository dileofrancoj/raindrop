import React, { createContext, useEffect, useRef, useState } from "react";
import { TIME_TO_INCREASE_COMPLEXITY } from "../constants/game";
import { iOperation } from "../interfaces/Drop";
import { createDrops } from "../utils/dropFactory";

type ContextType = {
  operations: Array<iOperation>;
  score: number;
  calculateOperation: (num: number) => void;
};

const contextDefault: ContextType = {
  operations: [],
  score: 0,
  calculateOperation: () => {},
};

export const GameContext = createContext<ContextType>(contextDefault);
const { Provider } = GameContext;

export const GameContextProvider: React.FC = ({ children }) => {
  const [operations, setOperations] = useState<Array<iOperation>>([]);
  const gameDuration = useRef(0);
  const [score, setScore] = useState<number>(0);

  const calculateOperation = (num: number) => {
    const matchs = operations.filter((operation) => operation.result === num);
    if (matchs.length) {
      setScore(score + matchs.length);
    }
    const restOperations = operations.filter(
      (operation) => operation.result !== num
    );
    setOperations(restOperations);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setOperations([...operations, ...createDrops(score)]);
    }, TIME_TO_INCREASE_COMPLEXITY);

    const duration = setInterval(() => {
      gameDuration.current = gameDuration.current + 1;
    }, 1000);
    return () => {
      clearInterval(timer);
      clearInterval(duration);
    };
  }, [operations, gameDuration, score]);

  return (
    <Provider value={{ operations, score, calculateOperation }}>
      {children}
    </Provider>
  );
};

export const useGame = () => {
  const context = React.useContext(GameContext);
  if (!context) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return context;
};
