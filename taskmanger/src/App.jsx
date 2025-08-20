import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Task from "./pages/Task";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='className="px-3 sm:px-[2vw] md:px-[4vw] lg:px-[7vw]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
