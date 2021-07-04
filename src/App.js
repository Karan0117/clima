import React from "react";
import styled from "styled-components";
// components
import Header from "./components/Header";

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
    </StyledApp>
  );
}

const StyledApp = styled.div`
height: 100vh;
background: var(--bg);
`;

export default App;
