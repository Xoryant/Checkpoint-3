import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCurrentUserContext } from "@pages/contexts/CurrentUserContext";
import axios from "axios";
import Plus from "@assets/plussign.png";
import CharacterCard from "./CharacterCard";
import "./Character.scss";

export default function Character() {
  const { user } = useCurrentUserContext();
  const [myCharacters, setMyCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/personnages`)
      .then(({ data }) => {
        setMyCharacters(data);
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
            {myCharacters.length > 0
              ? myCharacters.map((i) => <CharacterCard {...i} />)
              : null}
          </div>
          {user.admin && (
            <Link to="/createChara">
              <img src={Plus} alt="add-chara" id="addButton" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
