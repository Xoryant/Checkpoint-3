import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useCurrentUserContext } from "./contexts/CurrentUserContext";
import "./Register.scss";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleChangeLastname = (e) => {
    setLastname(e.target.value);
  };

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
    if (!email || !password || !firstname || !lastname) {
      // eslint-disable-next-line no-alert
      alert("You must provide all the information");
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/`,
          {
            lastname,
            firstname,
            email,
            password,
          },
          { withCredentials: true }
        )
        .then(({ data }) => {
          setCurrentUser(data);
          navigate("/login");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="div-bg">
      <form className="formsRegister" onSubmit={handleSubmit}>
        <div className="FormsRegisterItem">
          <h1>Create new account</h1>
          <div className="container-register-1">
            <label htmlFor="name" className="name">
              <p>Firstname :</p>
              <input
                type="name"
                id="name"
                required
                placeholder="Your firstname"
                value={firstname}
                onChange={handleChangeFirstname}
              />
            </label>
            <label htmlFor="customer" className="customer">
              <p>Lastname</p>
            </label>
            <input
              type="text"
              id="lastname-form"
              placeholder="Your lastname"
              value={lastname}
              onChange={handleChangeLastname}
            />
            <label htmlFor="email" className="email">
              <p>Email :</p>
              <input
                type="email"
                id="email"
                required
                placeholder="Your email"
                value={email}
                onChange={handleChangeEmail}
              />
            </label>
          </div>
          <div className="container-register-2">
            <label htmlFor="password" className="password">
              <p>Password :</p>
              <input
                type="password"
                id="password"
                required
                placeholder="Your password"
                value={password}
                onChange={handleChangePassword}
              />
            </label>
          </div>
          <p className="registertolink">
            <p className="loginLink">Already have account ?</p>
            <Link to="/login">
              {" "}
              <span className="spanregister">Click here.</span>
            </Link>
          </p>
          <button type="submit" className="sign-up">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
