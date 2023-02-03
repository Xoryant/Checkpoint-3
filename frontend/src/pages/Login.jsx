import { useState } from "react";
import axios from "axios";
import Joi from "joi";
import { useNavigate, Link } from "react-router-dom";
import { useCurrentUserContext } from "./contexts/CurrentUserContext";
import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const { setCurrentUser } = useCurrentUserContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error: validationErrors } = Joi.object({
      email: Joi.string().max(255),
      password: Joi.string().max(255),
    }).validate({ email, password });
    if (validationErrors) {
      console.error(validationErrors);
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
          {
            email,
            password,
          },
          { withCredentials: true }
        )
        .then(({ data }) => {
          setCurrentUser(data);
          navigate("/map");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="div-bg">
      <div className="formsLogin">
        <form className="formslogItem" onSubmit={handleSubmit}>
          <div className="container-login-1">
            <label htmlFor="email" className="formsItemLogin">
              <p>Email : </p>
              <input
                type=" email"
                id="email"
                value={email}
                onChange={handleChangeEmail}
                placeholder="example@email.com"
                required
              />
            </label>
          </div>
          <div className="container-login-2">
            <label htmlFor="password" className="formsItemLogin">
              <p> Password : </p>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handleChangePassword}
                placeholder="Your password"
                required
              />
            </label>
          </div>

          <p className="registerlink">
            {" "}
            Doesn't have an account ?{" "}
            <Link to="/register">
              {" "}
              <span className="spanregister">click here</span>
            </Link>
          </p>
          <button type="submit" className="submit-btn-form">
            {" "}
            Login{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
