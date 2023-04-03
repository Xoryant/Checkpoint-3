import { useState, useEffect } from "react";
import { useCurrentUserContext } from "@pages/contexts/CurrentUserContext";
import axios from "axios";
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
        </div>
      </div>
    </div>
  );
}
