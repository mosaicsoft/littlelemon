import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import "./index.css";
import Reserve from "./Reserve.jsx";
import Confirmed from "./Confirmed.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="reserve" element={<Reserve />} />
      <Route path="confirmed" element={<Confirmed />} />
    </Routes>
  </BrowserRouter>
);
