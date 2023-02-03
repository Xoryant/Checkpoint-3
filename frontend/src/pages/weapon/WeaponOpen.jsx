import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import WeaponCard from "./WeaponCard";
import "./Weapon.scss";

export default function WeaponOpen() {
  const [myWeapons, setMyWeapons] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/personnages/${id}`)
      .then(({ data }) => {
        setMyWeapons(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="mycharacterpage">
      <div className="myCharacters">
        <h1>Weapons</h1>
        <div className="modal-form">
          <div className="mycharactercomponent">
            {myWeapons ? <WeaponCard {...myWeapons} card /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
