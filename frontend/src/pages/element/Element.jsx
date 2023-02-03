import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCurrentUserContext } from "@pages/contexts/CurrentUserContext";
import axios from "axios";
import Plus from "@assets/plussign.png";
import ElementCard from "./ElementCard";

export default function Character() {
  const { user } = useCurrentUserContext();
  const [myElement, setMyElement] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/elemental`)
      .then(({ data }) => {
        setMyElement(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="myelement-general">
      <div className="myElement">
        <h1>Elements</h1>
        <div className="modal-form-element">
          <div className="myelementcomponent">
            {myElement.length > 0
              ? myElement.map((i) => <ElementCard {...i} />)
              : null}
          </div>
          {user.admin && (
            <Link to="/createElement">
              <img src={Plus} alt="add-element" id="addButton" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
