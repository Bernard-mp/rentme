import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Home from "./pages/Home";
export default function App() {
  return (
    <BrowserRouter>
      <Route>
        <Route path="/" element={Home} />
      </Route>
    </BrowserRouter>
  );
}
