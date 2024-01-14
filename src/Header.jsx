// import { usePlaneData } from "./hooks/usePlaneData";
import { NavLink } from "react-router-dom";
import logo4 from "./assets/logo4.png";
export const Header = () => {
  return (
    <div className="mainframe">
      <img
        className="img-m"
        src={logo4}
        alt="logo"
        style={{ width: "auto", height: "70px" }}
      />
      <h2 style={{ marginLeft: "20px" }}>SkyHunt.</h2>
      <NavLink to={`/profile/`} style={{ color: "white" }}>
        <button className="profilb">profil</button>
      </NavLink>
    </div>
  );
};
