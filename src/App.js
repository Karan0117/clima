import React from "react";
import styled from "styled-components";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
// pages
import Home from "./pages/Home";
import WeatherPage from "./pages/WeatherPage";
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
        <Route path="/weather">
          <WeatherPage />
        </Route>
      </div>
      <Footer />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: var(--bg);
  padding-top: 1rem;
  position: relative;
  overflow-x: hidden;
  .app-container {
    margin: auto;
    width: 90%;
  }
`;

export default App;
