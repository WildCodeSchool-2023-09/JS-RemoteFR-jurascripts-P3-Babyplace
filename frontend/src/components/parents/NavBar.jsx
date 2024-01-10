import "../../styles/navbar.scss";
import { Link } from "react-router-dom";
import {
  IoPerson,
  IoSearch,
  IoNotifications,
  IoHomeSharp,
} from "react-icons/io5";

function NavBar() {
  return (
    <nav className="navbar_parents">
      <Link to="/parents/connexion">
        <IoHomeSharp className="icons" />
      </Link>
      <Link to="/parents/creche">
        {" "}
        <IoSearch className="icons" />
      </Link>
      <Link to="/parents/folders">
        <IoNotifications className="icons" />
      </Link>
      <Link to="/parents/profile">
        <IoPerson className="icons" />
      </Link>
    </nav>
  );
}

export default NavBar;
