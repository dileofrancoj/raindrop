import React from "react";
import Main from "./components/Main/Main";
import { GameContextProvider } from "./contexts/GameContext";

const App = () => (
  <GameContextProvider>
    <Main />
  </GameContextProvider>
);

export default App;
