import "../../styles/navbar.scss";
import { Link } from "react-router-dom";
import {
  IoPerson,
  IoSearch,
  IoNotifications,
  IoHomeSharp,
} from "react-icons/io5";
import { useState } from "react";

function NavBar() {
  const navbar = [
    {
      id: 1,
      icons: <IoHomeSharp className="icons" />,
      link: "/parents/connexion",
    },
    {
      id: 2,
      icons: <IoSearch className="icons" />,
      link: "/parents/creche",
    },
    {
      id: 3,
      icons: <IoNotifications className="icons" />,
      link: "/parents/folders",
    },
    {
      id: 4,
      icons: <IoPerson className="icons" />,
      link: "/parents/profile",
    },
  ];

  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  const handleActive = (e) => {
    setActiveLinkIndex(e);
  };
  return (
    <nav className="navbar_parents">
      {navbar.map((icons) => (
        <Link
          to={icons.link}
          key={icons.id}
          className={` ${icons.id === activeLinkIndex ? "active" : ""}`}
          onClick={() => handleActive(icons.id)}
        >
          {icons.icons}
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
