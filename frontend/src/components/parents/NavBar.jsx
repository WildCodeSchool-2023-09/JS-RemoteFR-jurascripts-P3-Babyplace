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
      <IoHomeSharp />
      <IoSearch />
      <IoPerson />
      <IoNotifications />
      <IoGrid />
    </div>
  );
}

export default NavBar;
