import { Routes } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

export default function requireAdmin(Component) {
  return function (props) {
    const { user } = useCurrentUserContext();

    if (!user.id || !user.admin) {
      return <Routes to="/" />;
    }

    return <Component {...props} />;
  };
}
