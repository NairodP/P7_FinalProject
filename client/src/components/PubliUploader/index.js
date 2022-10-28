// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Navbar from "../../components/Main/Navbar";
// import { addPost, getPosts } from "../../actions/postActions";
// import { isEmpty, timestampParser } from "../Utils";

// const PubliUploader = () => {
//   const [message, setMessage] = useState("");
//   const [file, setFile] = useState();
//   const [postPicture, setPostPicture] = useState(null);
//   const userData = useSelector((state) => state.userReducer);
//   const error = useSelector((state) => state.errorReducer.postError);
//   const dispatch = useDispatch();

//   const handlePost = async () => {
//     if (message || postPicture) {
//       const data = new FormData();
//       data.append("posterId", userData._id);
//       data.append("message", message);
//       if (file) data.append("file", file);

//       await dispatch(addPost(data));
//       dispatch(getPosts());
//       cancelPost();
//     } else {
//       alert("Veuillez entrer un message");
//     }
//   };

//   const handlePicture = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const cancelPost = () => {
//     setMessage("");
//     setPostPicture("");
//     setFile("");
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="screen-container">
//         <div className="upload-container">
//           <div className="upload-title">Ajouter une Publication</div>
//           <form method="post" action="" className="upload-form">
//             {/* <div className="input-group">
//               <label htmlFor="publication-title">
//                 Titre de votre publication :
//               </label>
//               <input type="text" name="input-title" className="input-title" />
//               <span className="msg">Champ Valide</span>
//             </div> */}

//             <div className="input-group">
//               <label htmlFor="publication-image">
//                 Image de votre publication :
//               </label>
//               <input
//                 type="file"
//                 name="file"
//                 className="input-image"
//                 accept=".jpg, .jpeg, .png"
//                 onChange={(e) => handlePicture(e)}
//               />
//               {!isEmpty(error.format) && <span className="msg">{error.format}</span>}
//               {!isEmpty(error.maxSize) && <span className="msg">{error.maxSize}</span>}
//             </div>

//             <div className="input-group">
//               <label htmlFor="publication-text">
//                 Texte de votre publication :
//               </label>
//               <textarea
//                 type="text"
//                 name="textarea-message"
//                 className="input-text"
//                 onChange={(e) => setMessage(e.target.value)}
//                 value={message}
//                 placeholder=""
//               />
//               <span className="msg">Champ Valide</span>
//             </div>

//             <button type="submit" className="publi-btn" onClick={handlePost}>
//               Publier
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PubliUploader;
