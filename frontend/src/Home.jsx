import "./Home.scss";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="global-home">
      <div className="container-1">
        <h1>GenshInventory</h1>
        <p>
          GenshInventory is a site created to help gamers store the data linked
          to their account so as not to forget what they possess. A whole
          database system is also available on the site, you can find weapons
          with their descriptions as well as characters of all kinds{" "}
        </p>
      </div>
      <div className="container-2">
        <Link id="connexion" to="/login">
          Sign in !
        </Link>
        <p>Doesn't have yet ?</p>
        <Link id="enregistrer" to="/register">
          Make one !
        </Link>
      </div>
    </div>
  );
}
