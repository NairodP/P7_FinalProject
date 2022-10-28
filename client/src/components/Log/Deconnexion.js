import axios from "axios";
import cookie from "js-cookie";
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";

const Deconnexion = () => {

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <li  onClick={logout} className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }

  const navigate = useNavigate();
  const logout = async () => {
    const removeCookie = (key) => {
      // eslint-disable-next-line eqeqeq
      if (window != "undefined") {
        cookie.remove(key, { expires: 1 });
      }
    };

    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));
    navigate("/log");
  };

  return (
    <ul>
      <CustomLink onClick="logout()" to="/log">Se déconnecter</CustomLink>
    </ul>
  );
};

export default Deconnexion;
