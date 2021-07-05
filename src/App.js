import React from "react";
import styled from "styled-components";
// components
import Header from "./components/Header";
import Home from "./pages/Home";
// route
import { Route } from "react-router-dom";

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <div className="app-container">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/favorites">{/* <Favorites /> */}</Route>
        <Route path="/weather">{/* <Weather /> */}</Route>
      </div>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: var(--bg);
  padding: 1rem 0;
  .app-container {
    margin: auto;
    width: 90%;
  }
`;

export default App;
