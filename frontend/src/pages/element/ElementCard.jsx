import { Link } from "react-router-dom";
import "./Element.scss";

export default function ElementCard({
  element_name: elementName,
  element_desc: elementDesc,
  element_image: elementImg,
}) {
  return (
    <div className="cardBody-element">
      {elementName && <p className="elementName">{elementName}</p>}
      {/* {elementDesc && <p className="elementDesc">{elementDesc}</p>} */}
      {elementImg && (
        <Link to={`/${elementName}`}>
          <img
            className="elementImg"
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
