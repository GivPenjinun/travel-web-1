import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./pages/Header";
import Book from "./pages/Book.jsx";
import Packages from "./pages/Packages.jsx";
import Service from "./pages/Service.jsx";
import Gallery from "./pages/Gallery.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Home />
      <Book />
      <Packages />
      <Service />
      <Gallery />
    </div>
  );
}

export default App;
