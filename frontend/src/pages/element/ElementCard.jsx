import { Link } from "react-router-dom";
import "./Element.scss";

export default function ElementCard({
  id,
  element_name: elementName,
  element_desc: elementDesc,
  element_image: elementImg,
  card,
}) {
  return (
    <div className="cardBody-element">
      {card && <p className="elementName">{elementName}</p>}
      {elementImg && (
        <Link to={`/elementOpen/${id}`}>
          <img
            className="nameElement"
            src={`${
              import.meta.env.VITE_BACKEND_URL
            }/public/assets/images/${elementImg}`}
            alt={elementDesc}
          />
        </Link>
      )}
    </div>
  );
}
