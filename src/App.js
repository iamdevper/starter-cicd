import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const birds = useSelector((state) => state.birds);

  return (
    <Router>
      <Navbar />
      <h1>Bird List</h1>
      <ul>
        {birds.map((bird) => (
          <li key={bird.name}>
            <h3>{bird.name}</h3>
            <div>Views: {bird.views}</div>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/About" caseSensitive={false} element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
