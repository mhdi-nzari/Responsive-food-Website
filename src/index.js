import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.js";
import { initialState } from "./context/initialState.js";
import { StateProvider } from "./context/StateProvider.js";
import  reducer  from "./context/reducer";
import "./index.css";
const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </Router>

);
