import React from "react";
import Home from "./home/Home";
import Course from "./Courses/Courses";
import { Route, Routes } from "react-router-dom"
import Signup from "./components/Signup";
import LoginModal from "./components/Login";
function App() {
  return (
   <>
  <div className="dark:bg-slate-900 dark:text-white">
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Course/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/login" element={<LoginModal/>}/>
   </Routes>
  </div>
   </>
  );
}

export default App;