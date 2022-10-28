import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../actions/userActions";

const UploadImg = () => {
  const [file, setFile] = useState();
  // const error = useSelector((state) => state.errorReducer.userError);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", userData.firstName);
    data.append("userId", userData._id);
    data.append("file", file);

    dispatch(uploadPicture(data, userData._id));
  };

  const [toggleState, setToggleState] = useState(false);

  const toggleFunction = (ev) => {
    ev.preventDefault();
    setToggleState(!toggleState);
  };

  return (
    <form onSubmit={handlePicture} className="upload-pic">
      <label onClick={toggleFunction} htmlFor="file">
        - Changer la photo de profil -
      </label>
      {toggleState ? (
        <div className="toggleDiv">
          <input
            type="file"
            id="file"
            name="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => setFile(e.target.files[0])}
          />
          {/* <p className="error error-msg-upload">{error.maxSize}</p>
          <p className="error error-msg-upload">{error.format}</p> */}
          <button type="submit" className="publi-btn">
            Envoyer
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </form>
  );
};

export default UploadImg;
