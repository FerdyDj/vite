import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Counter from "./pages/Counter.jsx";
import "./App.css";
import Close from "./pages/Close.jsx";
import Inline from "./pages/Inline.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="counter" element={<Counter />} />
          <Route path="close" element={<Close />} />
          <Route path="inline" element={<Inline />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
