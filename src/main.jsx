import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import HomeEN from "./Pages/HomeEN.jsx";
import BlogEN from "./Pages/BlogEN.jsx";
import HomePT from "./Pages/HomePT.jsx";
import BlogPT from "./Pages/BlogPT.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" />} />
        <Route path="/en" element={<App />}>
          <Route index element={<HomeEN />} />
          <Route path="/en/blog" element={<BlogEN />} />
        </Route>
        <Route path="/pt" element={<App />}>
          <Route index element={<HomePT />} />
          <Route path="/pt/blog" element={<BlogPT />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
