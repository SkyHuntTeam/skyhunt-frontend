import { NavLink } from "react-router-dom";
import logo4 from "./assets/logo4.png";
export const Header2 = () => {
  return (
    <div className="mainframe">
      <img
        className="img-m"
        src={logo4}
        alt="logo"
        style={{ width: "auto", height: "70px" }}
      />
      <h2 style={{ marginLeft: "20px" }}>SkyHunt.</h2>
      <NavLink to={`/login/`} style={{ color: "white" }}>
        <button className="profilb">Wyloguj</button>
      </NavLink>
    </div>
  );
};
