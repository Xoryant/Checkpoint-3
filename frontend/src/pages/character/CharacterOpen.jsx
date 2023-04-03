import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import "./Character.scss";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

export default function Character() {
  const [myCharacter, setMyCharacter] = useState();
  const { user } = useCurrentUserContext();
  const { id } = useParams();
  const navigate = useNavigate();

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

  const handleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/personnages/${id}`)
      .then(() => {
        navigate("/characters"); // Redirect to characters page after delete
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="mycharacterpage">
      <div className="myCharacters">
        <h1>Characters</h1>
        <div className="modal-form">
          <div className="mycharactercomponent">
            {myCharacter ? <CharacterCard {...myCharacter} card /> : null}
          </div>
          {user.admin === 1 && (
            <button type="button" onClick={handleDelete}>
              Delete Character
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
