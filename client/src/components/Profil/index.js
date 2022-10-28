import React, { useState } from "react";
import Navbar from "../../components/Main/Navbar";
import { useSelector, useDispatch } from "react-redux";
import UploadImg from "./UploadImg";
import { dateParser } from "../Utils";
import { updateBio } from "../../actions/userActions";


const Profil = () => {

  const routeUpload = "http://localhost:5000/"
  const [bio, setBio] = useState("");
  // Gestion d'Etat 
  const [updateForm, setUpdateForm] = useState(false);
  const userData = useSelector((state) => state.userReducer);
  // extrait des morceaux de state et mettre le composant à jour sans chargement

  const dispatch = useDispatch();
  // envoyer des actions depuis le composant

  const handleUpdate = () => {
    dispatch(updateBio(userData._id, bio));
    setUpdateForm(false);
  };

  return (
    <>
      <Navbar />

      <div className="screen-container">
        <div className="upload-container">
          <div className="upload-title">
            {userData.firstName} {userData.lastName}
          </div>
          <div className="picture-container">
            <img
              src={routeUpload + userData.picture}
              alt=""
              className="picture-profil"
            />
          </div>
          <div className="line"></div>
          <div className="upload-img">

            <UploadImg />
            
          </div>

          <div className="bio-container">
            <div className="update-bio">
              <p className="bio-title">Bio <span className="emoji-fleche">⤵</span></p>
              {updateForm === false && (
                <>
                  <p className="update-bio-text" onClick={() => setUpdateForm(!updateForm)}>
                    {userData.bio ? userData.bio : <span className="bio-default-value">Dites nous en plus sur vous</span>}
                  </p>
                  <button className="btn-bio" onClick={() => setUpdateForm(!updateForm)}>
                    Modifier bio
                  </button>
                </>
              )}
              {updateForm && (
                <>
                  <textarea className="text-aera-bio"
                    type="text"
                    defaultValue={userData.bio}
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                  <button className="btn-bio" onClick={handleUpdate}>Valider modifications</button>
                </>
              )}
            </div>
            <p className="crea-date">Membre depuis le : {dateParser(userData.createdAt)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
