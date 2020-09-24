import React from 'react';
import './App.css';
import {solveSudoku} from "./sudokusolver";
import DisplayBoard from "./displayBoard";

function App() {

    // function solve() {
    //     let temp = solveSudoku(originalBoard);
    // }

  return (
    <div className="App">
      <header className="App-header">
          <DisplayBoard />
          <button >Submit</button>
      </header>
    </div>
  );
}

export default App;