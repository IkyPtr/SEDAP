import { AiFillHome } from "react-icons/ai";
import { createRoot } from "react-dom/client";
import Header from "./layouts/Header"; // atau path sesuai lokasi file Header.jsx
import Dashboard from "./pages/Dashboard"; // sesuaikan dengan lokasi file Dashboard.jsx
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
createRoot(document.getElementById("root")).render(
  <div id="app-container" className="bg-gray-100 min-h-screen flex">
    <div id="layout-wrapper" className="flex flex-row flex-1">
      <Sidebar />
      <div id="main-content" className="flex-1 p-4">
        <Header />
        <Dashboard />
      </div>
    </div>
  </div>
);
