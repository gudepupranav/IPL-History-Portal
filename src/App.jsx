import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Seasons from "./pages/Seasons";
import SeasonDetails from "./pages/SeasonDetails";
import Teams from "./pages/Teams";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./routes/ProtectedRoute";

import TeamDetails from "./pages/TeamDetails";
import Footer from "./components/Footer";
import Stats from "./pages/Stats";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/seasons" element={<Seasons />} />

        <Route path="/season/:year" element={<SeasonDetails />} />

        <Route path="/teams" element={<Teams />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>

            
          }
        />
        <Route
 path="/team/:id"
 element={<TeamDetails />}
/>
<Route
 path="/stats"
 element={<Stats />}
/>

      </Routes>
      <Footer />
    </>

    
  );
  
}

export default App;