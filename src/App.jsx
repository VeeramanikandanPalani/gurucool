import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MyEvents from "./pages/MyEvents";
import TeamsLearningZone from "./pages/TeamsLearningZone";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/MyEvents" element={<MyEvents />} />
          <Route path="/TeamZone" element={<TeamsLearningZone />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
