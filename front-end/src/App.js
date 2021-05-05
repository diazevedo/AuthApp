import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

import history from "./services/history";

import { AuthProvider } from "./Context/Auth";

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </AuthProvider>
  );
}

export default App;
