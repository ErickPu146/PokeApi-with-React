import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "../pages/Home";
import { PokemonProvider } from "../Context";
import { Profile } from "../pages/Profile";

function App() {
  return (
    <>
      <Router>
        <PokemonProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:pokemonId" element={<Profile />}/>
          </Routes>
        </PokemonProvider>
      </Router>
    </>
  );
}

export default App;
