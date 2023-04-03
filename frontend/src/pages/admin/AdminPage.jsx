import { Link } from "react-router-dom";

export default function AdminPage() {
  return (
    <div className="mycharacterpage">
      <h1>Admin Page</h1>
      <Link to="/createWeapon">
        <h2>Add Weapon</h2>
      </Link>
      <Link to="/createChara">
        <h2>Add Character</h2>
      </Link>
      <Link to="/createElement">
        <h2>Add Element</h2>
      </Link>
    </div>
  );
}
