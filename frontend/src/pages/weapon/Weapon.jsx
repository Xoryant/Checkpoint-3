import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCurrentUserContext } from "@pages/contexts/CurrentUserContext";
import axios from "axios";
import Plus from "@assets/plussign.png";
import WeaponCard from "./WeaponCard";
import "./Weapon.scss";

export default function Weapon() {
  const { user } = useCurrentUserContext();
  const [myWeapon, setMyWeapon] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/armes`)
      .then(({ data }) => {
        setMyWeapon(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="myweapons-general">
      <div className="myweapons">
        <h1>Weapon</h1>
        <div className="creation-form">
          <div className="myweapons">
            {myWeapon.length > 0
              ? myWeapon.map((i) => <WeaponCard {...i} />)
              : null}
          </div>
          {user.admin && (
            <Link to="/createWeapon">
              <img src={Plus} alt="add-weapon" id="addButton" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
