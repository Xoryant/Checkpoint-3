import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ElementCreate.scss";

export default function CreateElement() {
  const [elementName, setElementName] = useState("");
  const [elementDesc, setElementDesc] = useState("");
  const [elementImage, setElementImage] = useState("");

  const handleChangeName = (e) => {
    setElementName(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setElementDesc(e.target.value);
  };
  const handleChangeImage = (e) => {
    setElementImage(e.target.files[0]);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const imageDataElement = new FormData();
    imageDataElement.append("file", elementImage);
    imageDataElement.append("elementName", elementName);
    imageDataElement.append("elementDesc", elementDesc);

    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/api/elemental`,
        imageDataElement,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        navigate("/element");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="div-bg">
      <div className="creation-form-element">
        <div className="formsCreation">
          <form className="formsCreationElement" onSubmit={handleSubmit}>
            <div className="container-login-1">
              <label htmlFor="name" className="formsItemCreation">
                <p>Element Name</p>
                <input
                  type="name"
                  id="name"
                  value={elementName}
                  onChange={handleChangeName}
                  required
                />
              </label>
              <label htmlFor="password" className="formsItemCreation">
                <p>Image</p>
                <input
                  type="file"
                  id="elementImage"
                  onChange={handleChangeImage}
                  required
                />
              </label>
              <label htmlFor="desc" className="formsItemCreation">
                <p>Description</p>
                <input
                  type="desc"
                  id="desc"
                  value={elementDesc}
                  onChange={handleChangeDescription}
                  required
                />
              </label>
              <button type="submit" className="register-btn-form">
                {" "}
                Submit Element{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
