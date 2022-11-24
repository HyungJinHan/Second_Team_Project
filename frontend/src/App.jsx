import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ModelSelect from "./components/AI/ModelSelect";
import Test from "./components/Test";
import Chat from "./components/Chat/Chat";
import Join from "./components/Chat/Join";
import FitnessResult from "./components/AI/FitnessResult";
import FitnessResultNivo from "./components/AI/FitnessResultNivo";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/video" element={<ModelSelect />} />
        <Route path="/chatjoin" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/fitnessresult" element={<FitnessResult />} />
        <Route path="/nivotest" element={<FitnessResultNivo />} />
      </Routes>
    </div>
  );
};

export default App;
