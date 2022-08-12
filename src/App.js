import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/common/Header";
import Post from "./pages/Post";
import Write from "./pages/Write";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="write" element={<Write />} />
        <Route path="register/:path" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
