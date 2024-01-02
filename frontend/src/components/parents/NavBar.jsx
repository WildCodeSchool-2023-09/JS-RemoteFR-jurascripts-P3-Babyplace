import "../../styles/navbar.scss";
import {
  IoPerson,
  IoSearch,
  IoNotifications,
  IoHomeSharp,
  IoGrid,
} from "react-icons/io5";

function NavBar() {
  return (
    <div className="navbar">
      <IoHomeSharp className="icons" />
      <IoSearch className="icons" />
      <IoPerson className="icons" />
      <IoNotifications className="icons" />
      <IoGrid className="icons" />
    </div>
  );
}

export default NavBar;
