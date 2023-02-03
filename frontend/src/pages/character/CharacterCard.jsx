import { Link } from "react-router-dom";
import "./Character.scss";

export default function DecisionCard({
  id,
  character_name: characterName,
  character_desc: characterDesc,
  character_image: characterImg,
  card,
}) {
  return (
    <li className="cardBody">
      {card && <p className="descCharacter">{characterDesc}</p>}
      {card && <p className="nameCharacter">{characterName}</p>}
      {characterImg && (
        <Link to={`/characterOpen/${id}`}>
          <img
            className="nameCharacter"
            src={`${
              import.meta.env.VITE_BACKEND_URL
            }/public/assets/images/${characterImg}`}
            alt={characterDesc}
          />
        </Link>
      )}
    </li>
  );
}
