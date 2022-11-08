import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import SinglePageApp from "./SinglePageApp";
function App() {
  return (
    <div className="App">
   <BrowserRouter>
      <Routes>
          <Route exact path="" element={<SinglePageApp />} />
          <Route exact path="About" element={<About />} />
          <Route exact path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
