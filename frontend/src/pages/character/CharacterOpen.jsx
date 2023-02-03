import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import "./Character.scss";

export default function Character() {
  const [myCharacter, setMyCharacter] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/personnages/${id}`)
      .then(({ data }) => {
        setMyCharacter(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="mycharacterpage">
      <div className="myCharacters">
        <h1>Characters</h1>
        <div className="modal-form">
          <div className="mycharactercomponent">
            {myCharacter ? <CharacterCard {...myCharacter} card /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
