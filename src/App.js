import React from "react";
import ReactDOM from "react-dom";
import { initNavigation } from "@noriginmedia/react-spatial-navigation";
import SudokuGame from "./components/sudoku";
initNavigation();
const App = () => {
  return (
    <React.StrictMode>
      <SudokuGame/>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
