import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ElementCard from "./ElementCard";
import "./Element.scss";

export default function WeaponOpen() {
  const [myElement, setMyElement] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/elemental/${id}`)
      .then(({ data }) => {
        setMyElement(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="weaponPage">
      <div className="weapon-card">
        <h1>Element</h1>
        <div className="modal-form">
          <div className="Weaponcomponent">
            {myElement ? <ElementCard {...myElement} card /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
