import React from "react";
import Home from "../src/home/Home.jsx";
import Course from "./Course/Course.jsx";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup.jsx";
function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
