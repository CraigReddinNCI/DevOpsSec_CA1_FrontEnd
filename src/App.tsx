import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navigation from "./components/Navigation.tsx";
import HomePage from "./components/HomePage.tsx";
import Create from "./components/Create.tsx";
import Update from "./components/Update.tsx";
import ViewAll from "./components/ViewAll.tsx";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
          <Route path="/view_all" element={<ViewAll />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
