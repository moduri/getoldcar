import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Write from "./pages/write/Write";
import Register from "./pages/Register";
import GlobalStyle from "./styles/GlobalStyle";
import Detail from "./pages/detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="write" element={<Write />} />
        <Route path="detail/:cd" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
