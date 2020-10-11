import React from 'react';
import './App.css';
import DisplayBoard from "./displayBoard";
import {Container} from "@material-ui/core";

function App() {
    const style = {
        display: 'flex',
        flexFlow: 'column',
        color: "white",
    }
  return (
      <Container maxWidth={"xl"} style={style}>
          <DisplayBoard />
      </Container>
  );
}

export default App;