import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/components/Navbar";
import Home from "./Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateChara from "./pages/creates/CreateChara";
import Character from "./pages/character/Character";
import CreateWeapon from "./pages/creates/CreateWeapon";
import Weapon from "./pages/weapon/Weapon";
import CreateElement from "./pages/creates/CreateElement";
import Element from "./pages/element/Element";
import Footer from "./pages/components/Footer";
import Map from "./pages/map/Map";
import CharacterOpen from "./pages/character/CharacterOpen";
import WeaponOpen from "./pages/weapon/WeaponOpen";
import { useCurrentUserContext } from "./pages/contexts/CurrentUserContext";

// import WeaponInventory from "./pages/inventory/WeaponInventory";

import "./App.css";

function App() {
  const { user } = useCurrentUserContext();
  return (
    <div className="App">
      {user.id && <Navbar />}
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* {user.id && (
            <Route exact path="/inventory" element={<WeaponInventory />} />
          )} */}
          {user.id && user.admin && (
            <Route exact path="/createChara" element={<CreateChara />} />
          )}
          {user.id && user.admin && (
            <Route
              exact
              path="/characterOpen/:id"
              element={<CharacterOpen />}
            />
          )}
          {user.id && (
            <Route exact path="/characters" element={<Character />} />
          )}
          {user.id && user.admin && (
            <Route exact path="/createWeapon" element={<CreateWeapon />} />
          )}
          {user.id && <Route exact path="/weapons" element={<Weapon />} />}
          {user.id && <Route exact path="/element" element={<Element />} />}
          {user.id && user.admin && (
            <Route exact path="/createElement" element={<CreateElement />} />
          )}
          <Route exact path="/map" element={<Map />} />
          {user.id && (
            <Route exact path="/weaponOpen/:id" element={<WeaponOpen />} />
          )}
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
