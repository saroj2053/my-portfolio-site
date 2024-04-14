import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout/HomeLayout";
import ProjectDetailsPage from "./pages/ProjectDetailsPage/ProjectDetailsPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
