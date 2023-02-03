import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CharaCreate.scss";

export default function CreateChara() {
  const [CharacterName, setCharacterName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleChangeName = (e) => {
    setCharacterName(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const imageData = new FormData();
    imageData.append("file", image);
    imageData.append("characterName", CharacterName);
    imageData.append("description", description);

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/personnages`, imageData, {
        withCredentials: true,
      })
      .then(() => {
        navigate("/characters");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="div-bg">
      <div className="creation-form">
        <div className="formsCreation">
          <form className="formsCreationItems" onSubmit={handleSubmit}>
            <div className="container-login-1">
              <label htmlFor="name" className="formsItemCreation">
                <p>Character Name</p>
                <input
                  type="name"
                  id="name"
                  value={CharacterName}
                  onChange={handleChangeName}
                  required
                />
              </label>
              <label htmlFor="description" className="formsItemCreation">
                <p>Description</p>
                <input
                  type="desc"
                  id="desc"
                  value={description}
                  onChange={handleChangeDescription}
                  required
                />
              </label>
              <label htmlFor="image" className="formsItemCreation">
                <p>Character Image</p>
                <input
                  type="file"
                  id="image"
                  onChange={handleChangeImage}
                  required
                />
              </label>
              <button type="submit" className="register-btn-form">
                {" "}
                Submit{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
