import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ArmeCreate.scss";

export default function CreateWeapon() {
  const [armeName, setArmeName] = useState("");
  const [armeDesc, setArmeDescription] = useState("");
  const [armeImage, setArmeImage] = useState("");

  const handleChangeName = (e) => {
    setArmeName(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setArmeDescription(e.target.value);
  };
  const handleChangeWeaponImage = (e) => {
    setArmeImage(e.target.files[0]);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const imageDataArme = new FormData();
    imageDataArme.append("file", armeImage);
    imageDataArme.append("armeName", armeName);
    imageDataArme.append("armeDesc", armeDesc);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/armes`, imageDataArme, {
        withCredentials: true,
      })
      .then(() => {
        navigate("/weapons");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="div-bg">
      <div className="creationform">
        <div className="formsCreation">
          <form className="formsCreationWeapon" onSubmit={handleSubmit}>
            <div className="container-login-1">
              <label htmlFor="name" className="formsItemRegister">
                <p>Weapon Name</p>
                <input
                  type="text"
                  id="name"
                  value={armeName}
                  onChange={handleChangeName}
                  required
                />
              </label>
              <div className="container-form-3">
                <label htmlFor="password" className="formsItemRegister">
                  <p>Image</p>
                  <input
                    type="file"
                    id="WeaponImage"
                    onChange={handleChangeWeaponImage}
                    required
                  />
                </label>
              </div>
              <label htmlFor="desc" className="formsDescChara">
                <p>Weapon Description</p>
                <input
                  type="text"
                  id="desc"
                  value={armeDesc}
                  onChange={handleChangeDescription}
                  required
                />
              </label>
              <button type="submit" className="registerBtnWeapon">
                {" "}
                Submit Weapon{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
