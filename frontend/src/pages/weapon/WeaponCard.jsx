import { Link } from "react-router-dom";
import "./Weapon.scss";

export default function ArmeCard({
  id,
  weapon_name: armeName,
  weapon_desc: armeDesc,
  weapon_image: armeImage,
  card,
}) {
  return (
    <div className="cardBody">
      {card && <p className="weaponDesc">{armeDesc}</p>}
      {card && <p className="nameWeapon">{armeName}</p>}
      {armeImage && (
        <Link to={`/weaponOpen/${id}`}>
          <img
            className="nameWeapon"
            src={`${
              import.meta.env.VITE_BACKEND_URL
            }/public/assets/images/${armeImage}`}
            alt={armeDesc}
          />
        </Link>
      )}
    </div>
  );
}
